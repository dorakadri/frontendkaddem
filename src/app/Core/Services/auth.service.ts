import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router) { }

  login(user){
    return this.http.post<any>(environment.endpoints.users.login, user);
  }

  isLoggedIn():boolean{
    return localStorage.getItem("TOKEN")? true:false;
  }

  logOut(){
    localStorage.removeItem('USER');
    localStorage.removeItem('TOKEN');
    this.router.navigate(['login']);
  }

}
