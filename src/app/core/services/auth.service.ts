import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { EndPoints } from '../common/endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endPoint = EndPoints;
  token:BehaviorSubject<string|null>;
  constructor( private http: HttpClient) { 
    this.token=new BehaviorSubject<string>(localStorage.getItem("token")||"");
  }

  authenticate(creds):Promise<any>{   
    return this.http.post(this.endPoint.auth, creds).toPromise();
  }

  getAuthStatus(){
    return (localStorage.getItem("token"))?true:false;
  }

  setAuthentication(token){
    this.token.next(token);
  }

}
