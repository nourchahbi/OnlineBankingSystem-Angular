import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {OnlineBankingSystemService} from '../online-banking-system.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  account='account';
  username;
  message;
  constructor(private authService:AuthenticationService,private service:OnlineBankingSystemService,
              private router:Router) { }

  ngOnInit(): void {
    this.username=this.authService.username;
  }

  onWithdraw(data){

    data.username=this.username;
    console.log(data);
    this.service.postResourceAuth('withdraw',data).subscribe(data=>{
      this.router.navigateByUrl('home');
    },error=>{
      console.log(error);
      this.message=error.error.message;
    })
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
