import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 name:string="A"
 author:string="Tom Martin"
 disabled:boolean = false;
 src="https://images-eu.ssl-images-amazon.com/images/I/41zoxjP9lcL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"

 name1:string="A"
 author1:string="Tom Martin"
 src1="https://images-eu.ssl-images-amazon.com/images/I/41zoxjP9lcL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"

  constructor() { }

  name3:string="";

  ngOnInit(): void {
  }
  handleClick():void{
    alert("I am Clicked");
  }
  

}
