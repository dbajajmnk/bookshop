import { Component, OnInit } from '@angular/core';
import RegistrationForm from 'src/app/model/registrationform';

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
  constructor() { }

  ngOnInit(): void {
  }

  sumbitRegistration(){
    console.log(this.registrationForm);
  }

}
