import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss', '../admin.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm:FormGroup;
  private notifier: NotifierService;
  isLoading:boolean = false;
  @ViewChild('rememberMe') public rememberMe:ElementRef;

  constructor(private router: Router,private auth:AuthService,notifierService: NotifierService) { 
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required])
    });

    this.notifier = notifierService;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.checkRememberMe();
  }

  checkRememberMe(){
    if(localStorage.getItem("oaks_rememberme")){
      const obj = JSON.parse(localStorage.getItem("oaks_rememberme"));
      this.loginForm.setValue(obj);
      this.rememberMe.nativeElement.checked = true;
    }
  }
  onSign(){
    console.log("I am submit button")
    if(this.loginForm.valid){
      this.isLoading = true;

      if(this.rememberMe.nativeElement.checked){
        localStorage.setItem("oaks_rememberme",JSON.stringify(this.loginForm.value));
      }
      else{
        localStorage.removeItem("oaks_rememberme");
      }

      this.auth.authenticate(this.loginForm.value)
      .then(x=>{
        this.isLoading = false;
        localStorage.setItem("email",this.loginForm.value.email);
        localStorage.setItem("token",x.token);
        this.auth.setAuthentication(x.token);
        this.router.navigateByUrl('/Admin');
      })
      .catch(er=>{
        this.isLoading = false;
        console.error(er);
        if(er.status == 401){
          this.notifier.notify( "error", "Invalid username or password" );
        }
        else{
          this.notifier.notify( "error", "Server is not responding" );
        }

        // alert("Server is not responding")
      })

    }
  
  }

}
