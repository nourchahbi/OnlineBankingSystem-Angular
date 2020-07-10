import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {OnlineBankingSystemService} from '../online-banking-system.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  users;

  constructor(private authService:AuthenticationService,private service:OnlineBankingSystemService) { }

  ngOnInit(): void {
    this.service.getResourceAuth("appUsers").subscribe(data=>{
      this.users=data;
      console.log(this.users);
    },error=>{
      console.log(error);
    })
  }

  deleteUser(username){
    this.service.postResourceAuth("delete",username).subscribe(data=>{
      this.ngOnInit();
    },err=>{
      console.log(err);
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
