import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', '../admin.component.scss']
})
export class DashboardComponent implements OnInit {


  @ViewChild('sideBar')
  public sideBar: ElementRef;

  constructor(private router: Router, private auth:AuthService) { }

  email="";
  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.email = localStorage.getItem("email");
  }


  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/Admin/Signin');
  }

  toggleSideBar(){

    if(this.sideBar.nativeElement.classList.contains('toggled')){
      this.sideBar.nativeElement.classList.remove('toggled')
    }
    else{
      this.sideBar.nativeElement.classList.add('toggled')
    }

  }
}
