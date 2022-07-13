import { Component, Input, OnInit } from '@angular/core';
import LoginForm from 'src/app/model/lgoinform';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:LoginForm={
    email:"",
    password:""
  }

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  submit(){
    if(this.authService.isLoading)
    {
      return ;
    }
    this.authService.login(this.form)
  }
  isLoading():Boolean
  {
    return this.authService.isLoading
  }

}
