import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iprice } from 'src/app/core/models/price.model';
import { PriceService } from 'src/app/core/services/price.service';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.scss', '../client.component.scss']
})
export class UnitDetailsComponent implements OnInit {

  isLoading:boolean = true;
  paymentPlanBtn:string = "Hide";
  planVisibility:boolean = true;
  unit ;
  imageVisiblitiy:boolean = false;
  isMobile:boolean = false;
  whatsAppMobileNo:number;
  whatsAppMsg = `Hi, Our senior management team reviewed your application and crunched all the numbers, we’re excited to offer you an amazing price quote at Ak-TownOaks. You’ll find it here: https://townoaks.softosol.com/UnitDetail/26 for your review. After you see it, we know you’ll agree that E-PARK --with its incredible array of amenities, impeccable luxury, and world-class security--is more than a wonderful investment opportunity. It’s a price and value guarantee unmatched anywhere in Islamabad. We hope you’ll take advantage of this offering, as we believe you’d make a fine addition to our growing community of discriminating buyers. Please call us with any questions. We’re here for you.`
  @ViewChild('emailDialog') public emailDialog: ElementRef;
  @ViewChild('whatsappDialog') public whatsappDialog: ElementRef;

  @ViewChild('shareDropDown') public shareDropDown: ElementRef;

  
  constructor(private priceService:PriceService, private route: ActivatedRoute) { 
    this.unit = {
      id: 0,
      type:"",
      status: "",
      floor:0,
      area:0,
      number: 0,
      beds: "",
      priceSqFeet:0,
      totalPrice:0,
      downPayment:0,
      monthlyInstallment:0,
      semiAnnualInstallment:0,
      final:0,
  }
  }
  ngOnInit(): void {
    this.isMobile = (screen.width<=767)?true:false;
    this.route.params.subscribe(params=>{
      this.loadUnitDetail(parseInt(params.id))
    })
  }

  

  togglePlan(){
    this.paymentPlanBtn = (this.planVisibility)?"Generate":"Hide"
    this.planVisibility = !this.planVisibility;
  }
  togglePlanImage(){
    this.imageVisiblitiy = !this.imageVisiblitiy;

  }

  loadUnitDetail(id){
    this.priceService.getUnitDetail(id).subscribe((e:any)=>{
      e.type = (e.type ==1)?"Apartment":(e.type ==2)?"Office":(e.type ==3)?"Shop":"-";
      e.status = (e.status== 1)?"Available":(e.status== 2)?"Reserved":(e.status== 2)?"Sold":"-";
      e.floor = (e.floor >= 4 && e.floor <= 11)?(e.floor+"th"):(e.floor==1)?"1st":(e.floor==2)?"2nd":(e.floor==3)?"3rd":(e.floor==-1)?"Lower Ground":(e.floor==0)?"Ground":"-";
      e.beds = (e.beds >= 2 && e.beds<= 4)?(e.beds+" Bed"):"-";
      this.unit = e;
      this.isLoading = false;
    },response=>{

      this.isLoading = false;
      alert("Server is not responding");
    })
  }

  toggleSharePdf(){
    if(this.shareDropDown.nativeElement.classList.contains("showDrpDown")){
      this.shareDropDown.nativeElement.classList.remove("showDrpDown");
    }else{
      this.shareDropDown.nativeElement.classList.add("showDrpDown");
    }
    
  }

  openWhatsappDialog(){
    this.whatsappDialog.nativeElement.classList.add("in");
    this.toggleSharePdf()
  }

  shareOnWhatsapp(){
    if(this.isMobile){
      window.open(`whatsapp://send?text=${this.whatsAppMsg}&phone=+92${this.whatsAppMobileNo}`);
    }
    else{
      window.open(`https://api.whatsapp.com://send?text=${this.whatsAppMsg}&phone=+92${this.whatsAppMobileNo}`);
    // }
    this.whatsappDialog.nativeElement.classList.remove("in")
    this.whatsAppMobileNo = null;
  }
}
}