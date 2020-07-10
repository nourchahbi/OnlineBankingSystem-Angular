import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {OnlineBankingSystemService} from '../online-banking-system.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  account='account';
  username;
  constructor(private authService:AuthenticationService,private service:OnlineBankingSystemService,
              private router:Router) { }

  ngOnInit(): void {
    this.username=this.authService.username;
  }

  onDeposit(data){

    data.username=this.username;
    console.log(data);
    this.service.postResourceAuth('deposit',data).subscribe(data=>{
    this.router.navigateByUrl('home');
    },error=>{
      console.log(error);
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
