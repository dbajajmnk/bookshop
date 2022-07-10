import { Injectable } from '@angular/core';
import Book from 'src/app/model/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks():Book[]
  {
    return [
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
  
    ];
  
  }
}
