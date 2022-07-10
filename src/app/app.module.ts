import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppCompontnet } from "./app.compontent";
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';

@NgModule({
    declarations:[AppCompontnet, BookComponent, BooksComponent],
    imports:[BrowserModule,FormsModule],
    bootstrap:[AppCompontnet]
    
})
export class AppModule{}