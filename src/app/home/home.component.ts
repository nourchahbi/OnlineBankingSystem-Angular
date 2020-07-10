import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import {OnlineBankingSystemService} from '../online-banking-system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username:string;
  user;
  constructor(private authService:AuthenticationService,private router:Router,
              private service:OnlineBankingSystemService ) { }

  ngOnInit(): void {
    this.username=this.authService.username;

    this.service.postResourceAuth('user',{'username':this.username}).subscribe(data=>{
      this.user=data;
      console.log(data);
    },error=>{
      console.log(error);
    })
  }

  goToDeposit(){
    this.router.navigateByUrl('/deposit');
  }
  goToWithdraw(){
    this.router.navigateByUrl('/withdraw');
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

  onLogout() {
    this.authService.logout();
    this.username=undefined;
  }
}
