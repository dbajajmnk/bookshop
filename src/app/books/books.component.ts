import { Component, OnInit } from '@angular/core';
import Book from '../model/book';

import { BooksService } from './books/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  isShowing:boolean =false;

  books:Book[] = [];
    constructor(private bookService:BooksService) { 
    console.log("I am Books Constructor")
    
  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    
  }
  addToCart(event:Book)
  {
    console.log(event);
  }

}


