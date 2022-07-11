import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import Book from 'src/app/model/book';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit,OnDestroy {
  isAdded:boolean=false

 @Input() book:Book={} as Book
  constructor(private cartService:CartService) {
    

   }
  ngOnDestroy(): void {
   
  }
  ngOnInit(): void {
   
   
  }

  addToCart()
  {
    console.log(this.book);
    this.isAdded=true;
    this.cartService.addBook(this.book);
  }
  removeFromCart()
  {
      this.isAdded=false
      this.cartService.removeBook(this.book);
  }  

}
