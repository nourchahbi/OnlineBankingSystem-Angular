import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errormessage;

  constructor(private authService:AuthenticationService,private router : Router) { }

  ngOnInit(): void {
    console.log("success");
  }

  onLogin(data){
    console.log(data);
    this.authService.login(data).subscribe(resp=>{

      let jwt = resp.headers.get('Authorization');
      this.authService.saveToken(jwt);
      this.router.navigateByUrl('/home');
    }, err=>{
      this.errormessage=err.error.message;
      console.log(err);
    })
  }

  onClick(){
    this.router.navigateByUrl('/register');
  }

  isAdmin(){
    return this.authService.isAdmin();
  }

  isUser(){
    return this.authService.isUser();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }
}
