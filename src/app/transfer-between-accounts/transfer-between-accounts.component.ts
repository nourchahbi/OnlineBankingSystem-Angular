import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import {OnlineBankingSystemService} from '../online-banking-system.service';

@Component({
  selector: 'app-transfer-between-accounts',
  templateUrl: './transfer-between-accounts.component.html',
  styleUrls: ['./transfer-between-accounts.component.css']
})
export class TransferBetweenAccountsComponent implements OnInit {
  account='account';
  account1='account1';
  username;
  errormessage;
  constructor(private authService:AuthenticationService,private service:OnlineBankingSystemService,
              private router:Router) { }

  ngOnInit(): void {
    this.username=this.authService.username;
    console.log(this.username)
  }

  onTransfer(data) {
    data.username=this.username;
    console.log(data);
    this.service.postResourceAuth('transfer',data).subscribe(data=>{
      this.router.navigateByUrl('home');
    },error=>{
      this.errormessage=error.error.message;
      console.log(error);
    })
  }

  onChange(){
    if(this.account=='PrimaryAccount'){
      this.account1='SavingsAccount'
    }
    else if(this.account=='SavingsAccount'){
      this.account1='PrimaryAccount'
    };
  }
  onChange1(){
    if(this.account1=='PrimaryAccount'){
      this.account='SavingsAccount'
    }
    else if(this.account1=='SavingsAccount'){
      this.account='PrimaryAccount'
    };
  }

}
