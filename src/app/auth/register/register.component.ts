import { Component, OnInit } from '@angular/core';
import RegistrationForm from 'src/app/model/registrationform';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm:RegistrationForm={email:"",
  password:"",
  confirmPassword:""
}
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  sumbitRegistration(){
    if(this.authService.isLoading)
    {
      return;
    }
    this.authService.register(this.registrationForm)
  }
  isLoading():Boolean
  {
    return this.authService.isLoading
  }


}
