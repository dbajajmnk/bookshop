import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import Book from 'src/app/model/book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit,OnDestroy {

 @Input() book:Book={} as Book
 myInterval:any = null;
 @Output() bookEmitter = new  EventEmitter<Book>();
  constructor() {
    console.log("Constructor Called");

   }
  ngOnDestroy(): void {
    console.log("I am Destroyed")
    clearInterval(this.myInterval)
  }
  ngOnInit(): void {
    console.log("NgOnInit")
    this.myInterval = setInterval(()=>{
      console.log("hello")
    },1000)
  }

  addToCart()
  {
    this.bookEmitter.emit(this.book)
  }
  

}
