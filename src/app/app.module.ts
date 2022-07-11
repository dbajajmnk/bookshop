import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppCompontnet } from "./app.compontent";
import { AppRoutingModule } from "./app.routing.module";
import { BooksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';

@NgModule({
    declarations:[AppCompontnet, CartComponent],
    imports:[BrowserModule,FormsModule,BooksModule,AppRoutingModule],
    bootstrap:[AppCompontnet]
    
})
export class AppModule{}