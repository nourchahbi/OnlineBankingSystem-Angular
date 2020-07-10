import { Component, OnInit } from '@angular/core';
import {OnlineBankingSystemService} from '../online-banking-system.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-savings-transaction',
  templateUrl: './savings-transaction.component.html',
  styleUrls: ['./savings-transaction.component.css']
})
export class SavingsTransactionComponent implements OnInit {


  transactions;
  displayedColumns: string[] = ['Date', 'Description', 'Type', 'Status','Amount'];
  constructor(private service:OnlineBankingSystemService,private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.service.postResourceAuth('savingsTransactions',{'username':this.authService.username}).subscribe(data=>{
      this.transactions=data;
      console.log(this.transactions);
    },error=>{
      console.log(error);
    })
  }
}

