import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Iprice } from 'src/app/core/models/price.model';
import { PriceService } from 'src/app/core/services/price.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss', '../admin.component.scss']
})
export class AddRoomComponent implements OnInit {


  isLoading:boolean = false;
  room:FormGroup;
  private notifier: NotifierService;

  constructor(private unitService:PriceService,notifierService: NotifierService, private route: ActivatedRoute , private cd:ChangeDetectorRef) { 
    this.initlizeForm();
    this.notifier = notifierService;
  }

  ngOnInit(): void {
   this.validate(true);
   
  }

  ngAfterViewInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if(id){
        
    this.isLoading = true;
    this.cd.detectChanges();
        this.loadUnitData(id);
      }
      else{
      
      }
    })
    
  }

  initlizeForm(){

   this.room = new FormGroup({
      id: new FormControl('0'),
      type: new FormControl('1',[Validators.required]),
      status: new FormControl('1',[Validators.required]),
      floor: new FormControl('1',[Validators.required]),
      area: new FormControl('',[Validators.required]),
      number: new FormControl('',[Validators.required]),
      beds: new FormControl('0'),
      priceSqFeet : new FormControl('',[Validators.required]),
      downPayment : new FormControl('',[Validators.required]),
      monthlyInstallment : new FormControl('',[Validators.required]),
      semiAnnualInstallment : new FormControl('',[Validators.required]),
      final : new FormControl('',[Validators.required]),
      totalPrice : new FormControl('',[Validators.required]),
  
    });

  }

  loadUnitData(id){
    this.unitService.getUnitDetail(id).subscribe(data=>{
      const  unit:Iprice = data;
      try{
        this.room.setValue(unit);

      }catch(e){

      }
      this.isLoading =false;
         
    }, response=>{
      console.log(" load unit detail ", response);
      
      this.isLoading =false;
      alert("Server is not responding");
    })

  }

  onSubmit(){
    console.log(this.room.value);
    if(this.room.valid){
      this.isLoading =true;
      if(this.room.value.id == "0"){
        this.unitService.addRoom(this.room.value).subscribe(data=>{
          this.initlizeForm();
          this.isLoading = false;
          this.notifier.notify( "success", "Unit successfully Added." );
          // console.log(data);
          // this.validate(false);
          // this.room.reset();
      


  
        },respose=>{
          console.log("add unit error", respose);
          this.isLoading = false;
        });

      }
      else{
        this.unitService.updateRoom(this.room.value).subscribe(data=>{
          console.log(data);
          this.isLoading = false;
          
          this.notifier.notify( "success", "Unit successfully updated." );
  
        },respose=>{
          console.log("edit unit error", respose);
          this.isLoading = false;
        });


      }
    
    }

  }

  validate(id){
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  

            form.classList.add('was-validated');
          
        }, false);
          
      })

  }

}
