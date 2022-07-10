import { Component, OnInit } from '@angular/core';
import Book from '../model/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

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
  addToCart(event:Book)
  {
    console.log(event);
  }

}


