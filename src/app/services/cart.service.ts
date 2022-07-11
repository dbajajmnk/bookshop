import { Injectable } from '@angular/core';
import Book from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Book[]=[];

  addBook(book:Book)
  {
    this.cart.push(book);
  }
  removeBook(book:Book)
  {
    this.cart = this.cart.filter(f => f!=book)
  }

  constructor() { }
}
