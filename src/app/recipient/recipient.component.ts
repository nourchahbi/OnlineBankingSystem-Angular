import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {OnlineBankingSystemService} from '../online-banking-system.service';

@Component({
  selector: 'app-recipient',
  templateUrl: './recipient.component.html',
  styleUrls: ['./recipient.component.css']
})
export class RecipientComponent implements OnInit {
  recipients;
  username;
  errormessage;
  constructor(private service:OnlineBankingSystemService,private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.username=this.authService.username;
    this.service.postResourceAuth('recipientslist',{'username':this.authService.username}).subscribe(data=>{
      this.recipients=data;
      console.log(this.recipients);
    },error=>{
      console.log(error);
    })
  }

  onaddRecipient(data){
    data.username=this.username;
    this.service.postResourceAuth('addRecipient',data).subscribe(data=>{
      this.recipients=data;
      this.ngOnInit();
      console.log(this.recipients);
    },error=>{
      this.errormessage=error.error.message;
      console.log(error);
      console.log(data);
    })
  }

}
