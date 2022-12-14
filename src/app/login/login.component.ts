import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authRequest } from '../Core/Modals/authRequest';
import { authResponse } from '../Core/Modals/authResponse';
import { AuthService } from '../Core/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  req:authRequest;
  res:authResponse;

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm:any){
    this.req=loginForm.value;
    console.log(this.req)
    this.authService.login(this.req).subscribe(
      response=>{
        this.res=response;
        if(this.res.jwtToken){
          localStorage.setItem('TOKEN', this.res.jwtToken);
          delete this.res.user.userPassword;
          localStorage.setItem('USER', JSON.stringify(this.res.user));
          console.log('hola responsaaaa', this.res);
          this.router.navigate(['/dashboard']);
        }else{
          alert('something wrong please contact the adminstrator!');
        }
      },
      error=>{
        console.log('hello errora: ',error);
      },
      ()=>{
        console.log('completed')
      }
    )
  }

}
