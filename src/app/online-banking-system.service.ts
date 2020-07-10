import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class OnlineBankingSystemService{

  host:string='http://localhost:8084/';

  constructor(private http:HttpClient,private authservice : AuthenticationService) { }

  public postResource(url,data){
    return this.http.post(this.host+url,data);
  }

  public postResourceAuth(url,data){
    let headers = new HttpHeaders({'authorization':'Bearer '+this.authservice.jwt});
    return this.http.post(this.host+url,data, {headers:headers});
  }

  public getResourceAuth(url){
    let headers = new HttpHeaders({'authorization':'Bearer '+this.authservice.jwt});
    return this.http.get(this.host+url, {headers:headers});
  }


}
