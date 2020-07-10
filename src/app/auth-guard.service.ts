import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService:AuthenticationService,private router : Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    if(this.isAuthenticated()){
      return true;
    } else {
      this.router.navigateByUrl('login',{
        queryParams:{
          return : state.url
        }
      });
      return false;
    }
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
