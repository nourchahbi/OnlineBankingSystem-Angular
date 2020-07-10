import { Component, OnInit } from '@angular/core';
import {OnlineBankingSystemService} from '../online-banking-system.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-primary-transaction',
  templateUrl: './primary-transaction.component.html',
  styleUrls: ['./primary-transaction.component.css']
})
export class PrimaryTransactionComponent implements OnInit {

  transactions;
  displayedColumns: string[] = ['Date', 'Description', 'Type', 'Status','Amount'];

  constructor(private service:OnlineBankingSystemService,private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.service.postResourceAuth('primaryTransactions',{'username':this.authService.username}).subscribe(data=>{
      this.transactions=data;
      console.log(this.transactions);
    },error=>{
      console.log(error);
    })
  }

}
