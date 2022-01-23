import { Component, OnDestroy, OnInit } from '@angular/core';
import { PriceService } from 'src/app/core/services/price.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss',]
})
export class RoomListComponent implements OnInit , OnDestroy{

  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();
  priceTableListData = [];
  priceList;
  deleteId;

  isLoading:boolean = false;
  constructor(private priceService:PriceService,private router:Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10 
    };
    this.loadTable()
  }

  loadTable(){
    this.isLoading = true;
    this.priceService.getUnitList().subscribe(data => {
      data.forEach( e => {
        

        e.type = (e.type ==1)?"Apartment":(e.type ==2)?"Office":(e.type ==3)?"Shop":"-";
        e.status = (e.status== 1)?"Available":(e.status== 2)?"Reserved":(e.status== 2)?"Sold":"-";
        e.floor = (e.floor >= 4 && e.floor <= 11)?(e.floor+"th"):(e.floor==1)?"1st":(e.floor==2)?"2nd":(e.floor==3)?"3rd":(e.floor==-1)?"Lower Ground":(e.floor==0)?"Ground":"-";
        e.beds = (e.beds >= 2 && e.beds<= 4)?(e.beds+" Bed"):"-";

                
      });
      this.priceTableListData = data;
      this.priceList = data;
      this.dtTrigger.next();
      this.isLoading = false;
                  
    }, response=>{
      this.isLoading = false;
    });
    
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  navigate(value:any){
      this.router.navigate(['Admin/Add-Edit',value.id]);
  }

  setUnitId(id){
    this.deleteId = id;
  }

  deleteUnit(){
    this.isLoading = false;
      this.priceService.deleteRoom(this.deleteId).subscribe(data=>{
        this.dtTrigger.unsubscribe();
        this.deleteId = null;
        this.loadTable();
      },response=>{
        alert("Server Error: Unable to delete this right now")
        this.isLoading = false;

      })
  }
}
