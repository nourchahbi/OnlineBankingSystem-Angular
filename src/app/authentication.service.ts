import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  host2: string = "http://localhost:8084";
  jwt: string;
  username: any;
  roles: any;

  constructor(private http: HttpClient, private router: Router) {
  }

// Methode post pour recuperer le token

  login(data) {
    return this.http.post(this.host2 + "/login", data, {observe: 'response'});
  }

// Enregistrer le token dans le local storage

  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJWT();

  }

//Recuperer le username et le role a partir du jwt

  parseJWT() {
    if (this.jwt != undefined) {
      let jwtHelper = new JwtHelperService();
      this.username = jwtHelper.decodeToken(this.jwt).sub;
      console.log(this.username);
      this.roles = jwtHelper.decodeToken(this.jwt).roles;
    }
  }

//verifier si l'utilisateur est admin

  isAdmin() {
    return this.roles.indexOf('ADMIN') >= 0;
  }


//verifier si l'utilisateur est user

  isUser() {
    return this.roles.indexOf('USER') >= 0;
  }


//verifier si l'utilisateur est authentifié

  isAuthenticated() {
    this.loadToken();
    return this.roles && (this.isAdmin() || this.isUser());
  }

//charger le token
  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }


  logout() {
    localStorage.removeItem('token');
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
    this.router.navigateByUrl('login');
  }
}
