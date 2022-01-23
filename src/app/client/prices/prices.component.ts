import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { PriceService } from 'src/app/core/services/price.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss', '../client.component.scss']
})
export class PricesComponent implements OnInit {

  
  isLoading:boolean = true;
  public unitsLen=0;

  @ViewChild('status')
  public statusBtns!: ElementRef;
  
  @ViewChild('unit')
  public unitBtns!: ElementRef;

  @ViewChild('dialog')
  public dialog: ElementRef;
  

  searchArray = {bed:null, status:null};
  isMobile:boolean = false;
  priceTableListData = [];
  priceList;

  constructor(private router:Router,private renderer: Renderer2, private priceService:PriceService ) { }
  ngOnInit(): void {
    this.loadTable();
    this.isMobile = (screen.width<=767)?true:false;

    this.renderer.listen('window', 'click',(e:Event)=>{

      if(e.target["classList"].value == "filterOverlay"){
        this.dialog.nativeElement.classList.remove("show_filters");
      }
    })
  }

  loadTable(){
    this.priceService.getUnitList().subscribe(data => {
      data.forEach( e => {

        e.type = (e.type ==1)?"Apartment":(e.type ==2)?"Office":(e.type ==3)?"Shop":"-";
        e.status = (e.status== 1)?"Available":(e.status== 2)?"Reserved":(e.status== 2)?"Sold":"-";
        e.floor = (e.floor >= 4 && e.floor <= 11)?(e.floor+"th"):(e.floor==1)?"1st":(e.floor==2)?"2nd":(e.floor==3)?"3rd":(e.floor==-1)?"Lower Ground":(e.floor==0)?"Ground":"-";
        e.beds = (e.beds >= 2 && e.beds<= 4)?(e.beds+" Bed"):"-";

                
      });

      this.unitsLen = data.length;
      this.priceTableListData = data;
      this.priceList = data;
      this.isLoading = false;
      
    },response=>{
      this.isLoading = false;
      alert("Server is not responding");
    });
    
  }


  navigate(value:any){
    if(value.status.toLowerCase() != "sold"){
      this.router.navigate(['/UnitDetail',value.id]);
    }
  }

  filterClick(args:any){
    const name:string = args.target.name; 
    if(name.includes("unit")){
      this.searchArray.bed = name.slice(name.indexOf("_")+1);
      const nodes = this.unitBtns.nativeElement.childNodes;
      nodes.forEach(element => {
        element.classList.remove("active")
      });
      args.target.classList.add('active');
    }
    else if(name.includes("status")){
      this.searchArray.status = name.slice(name.indexOf("_")+1);
      this.statusBtns.nativeElement.childNodes.forEach(element => {
        element.classList.remove("active")
      }); 
      args.target.classList.add('active');
    }
    
    if(this.searchArray.bed){
        if(this.searchArray.bed.includes('bed')){
          this.priceTableListData = this.priceList.filter(e=>e["bed"] == this.searchArray.bed);
        }
        else{
          this.priceTableListData = this.priceList.filter(e=>e["type"].toLowerCase() == this.searchArray.bed.toLowerCase());
        }

    }else{
      this.priceTableListData = this.priceList;
    }

    if(this.searchArray.status){
        this.priceTableListData = this.priceTableListData.filter(e=>e["status"] == this.searchArray.status);
    }

    console.log(this.searchArray);

  }
  clearAllFilters(){
    // loads the orignal array of data
    this.statusBtns.nativeElement.childNodes.forEach(element => {
      element.classList.remove("active")
    }); 
    this.unitBtns.nativeElement.childNodes.forEach(element => {
      element.classList.remove("active")
    }); 
    this.priceTableListData = this.priceList;

    this.dialog.nativeElement.classList.remove("show_filters");
  }

 showFilterDialog(){
   if(this.isMobile){
    this.dialog.nativeElement.classList.add("show_filters");
   }
  
 }
 doneFilters(){
  this.dialog.nativeElement.classList.remove("show_filters");
 }

 @HostListener('window:scroll', ['$event'])
 onWindowScroll(event) {
   if(this.isMobile){
   
   }

  //  if (document.body.scrollTop > 20 ||     
  //  document.documentElement.scrollTop > 20) {
  //    document.getElementById('subTitle').classList.add('red');
  //    document.getElementById('paragraph').classList.add('green');
  //  }
 }

}
