import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  eamil:string="";
  password:string="";
  confirmpassword:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
