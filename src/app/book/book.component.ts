import { Component, OnInit } from '@angular/core';
import Book from './model/book';




@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  isShowBooks=false;

  books:Book[] = [
    {name:"A",
    author:"Tom Martin",
    image:"https://images-eu.ssl-images-amazon.com/images/I/41zoxjP9lcL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    amount:800
   
  },
   {name:"B",
    author:"Tom Rogers",
  
    image:"https://images-eu.ssl-images-amazon.com/images/I/41zoxjP9lcL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    amount:700
   }

  ]
 



  constructor() { }

  

  ngOnInit(): void {
  }
  handleClick():void{
    alert("I am Clicked");
  }
  

}
