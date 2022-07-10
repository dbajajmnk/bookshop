import { Component, OnInit } from '@angular/core';
import Book from '../model/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  isShowing:boolean =false;

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
  constructor() { 
    console.log("I am Books Constructor")
  }

  ngOnInit(): void {
    console.log("Init Value for Books NgOnInit")
  }
  addToCart(event:Book)
  {
    console.log(event);
  }

}


