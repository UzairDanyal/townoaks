import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EndPoints } from '../common/endpoints';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  endPoint = EndPoints;
  priceList = [{
    apartmentID:"26",
    floor:"1",
    unitNo:"102",
    bed:"4 bed",
    area:"3040",
    type:"Corner",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"available"
  },{
    apartmentID:"26",
    unitNo:"102",
    floor:"1",
    bed:"3 bed",
    area:"3040",
    type:"Office",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"available"
  },{
    apartmentID:"26",
    unitNo:"102",
    bed:"2 bed",
    area:"3040",
    floor:"1",
    type:"Shop",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"available"
  },{
    apartmentID:"26",
    unitNo:"102",
    bed:"2 bed",
    area:"3040",
    floor:"1",
    type:"Corner",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"available"
  },{
    apartmentID:"26",
    unitNo:"102",
    floor:"1",
    bed:"2 bed",
    area:"3040",
    type:"Corner",
    ftPrice:"9900",
    totalPrice: "33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"available"
  },{
    apartmentID:"26",
    unitNo:"102",
    bed:"2 bed",
    floor:"1",
    area:"3040",
    type:"Corner",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"available"
  },{
    apartmentID:"26",
    unitNo:"102",
    bed:"2 bed",
    floor:"1",
    area:"3040",
    type:"Corner",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"available"
  },{
    apartmentID:"26",
    unitNo:"102",
    floor:"1",
    bed:"2 bed",
    area:"3040",
    type:"Corner",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"available"
  },{
    apartmentID:"26",
    unitNo:"102",
    bed:"2 bed",
    floor:"1",
    area:"3040",
    type:"Corner",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"available"
  },{
    apartmentID:"26",
    unitNo:"102",
    bed:"2 bed",
    area:"3040",
    floor:"1",
    type:"Corner",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"available"
  },{
    apartmentID:"26",
    unitNo:"102",
    bed:"2 bed",
    floor:"1",
    area:"3040",
    type:"Corner",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"available"
  },{
    apartmentID:"26",
    unitNo:"102",
    floor:"1",
    bed:"2 bed",
    area:"3040",
    type:"Corner",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"available"
  },{
    apartmentID:"26",
    floor:"1",
    unitNo:"102",
    bed:"2 bed",
    area:"3040",
    type:"Corner",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"available"
  },{
    apartmentID:"26",
    unitNo:"102",
    floor:"2",
    bed:"2 bed",
    area:"3040",
    type:"Corner",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"available"
  },{
    apartmentID:"26",
    unitNo:"102",
    floor:"1",
    bed:"2 bed",
    area:"3040",
    type:"Corner",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"available"
  },{
    apartmentID:"26",
    unitNo:"102",
    bed:"2 bed",
    floor:"3",
    area:"3040",
    type:"Corner",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"available"
  },{
    apartmentID:"26",
    unitNo:"102",
    bed:"2 bed",
    area:"3040",
    type:"Corner",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"available"
  },{
    apartmentID:"26",
    unitNo:"102",
    bed:"2 bed",
    area:"3040",
    floor:"3",
    type:"Corner",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"available"
  },{
    apartmentID:"26",
    unitNo:"102",
    floor:"4",
    bed:"2 bed",
    area:"3040",
    type:"Corner",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"reserved"
  },{
    apartmentID:"26",
    unitNo:"102",
    bed:"3 bed",
    floor:"1",
    area:"3040",
    type:"Corner",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"sold"
  },{
    apartmentID:"26",
    unitNo:"102",
    bed:"4 bed",
    area:"3040",
    type:"Corner",
    floor:"1",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"reserved"
  },{
    apartmentID:"26",
    unitNo:"102",
    bed:"2 bed",
    area:"3040",
    type:"Corner",
    floor:"1",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    possession:"33105060",
    status:"sold"
  },{
    apartmentID:"26",
    unitNo:"102",
    bed:"3 bed",
    area:"3040",
    type:"Corner",
    ftPrice:"9900",
    totalPrice:"33105600",
    downPayment:"9931680",
    quarterlyInstallment:"1655280",
    floor:"1",
    possession:"33105060",
    status:"sold"
  },
]

private unitDetail = {
  id:26,
  unitNo:"5th-05",
  bed:"2 bed",
  area:"934",
  type:"Corner",
  totalPrice:7145100,
  downPayment:1200000,
  monthlyInstallment: 60000,
  semiAnnualInstallment: 400000,
  floor: "5",
  remainingPossession: 341500,
}



  constructor( private http: HttpClient) { }

  getUnitList():Observable<any>{   
    return this.http.get(this.endPoint.getAllUnit);
  }

  getUnitDetail(id:number):Observable<any>{
    return this.http.get(this.endPoint.getUnit+"/"+id);
  }
  addRoom(data):Observable<any>{
   return this.http.post(this.endPoint.addUnit,data);
  }

  updateRoom(data):Observable<any>{
    return this.http.put(this.endPoint.addUnit+"/"+data.id, data);
  }
  deleteRoom(id):Observable<any>{
    return this.http.delete(this.endPoint.addUnit+"/"+id);
  }
}
