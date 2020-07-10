import { Component, OnInit } from '@angular/core';
import {OnlineBankingSystemService} from '../online-banking-system.service';
import {Router} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

errormessage;

  constructor(private service:OnlineBankingSystemService,private  router:Router) { }

  ngOnInit(): void {
  }

  onRegister(data) {
    this.service.postResource('register',data).subscribe(data1=>{
      this.router.navigateByUrl('login');
      console.log(data1);
    },err=>{
      console.log(err);
      this.errormessage=err.error.message;
    })

  }
}
