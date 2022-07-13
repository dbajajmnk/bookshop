import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppCompontnet } from "./app.compontent";
import { AppRoutingModule } from "./app.routing.module";
import { AuthModule } from "./auth/auth.module";
import { AuthService } from "./auth/auth.service";
import { BooksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';

@NgModule({
    declarations:[AppCompontnet, CartComponent],
    imports:[BrowserModule,BooksModule,AppRoutingModule,AuthModule],
    bootstrap:[AppCompontnet]
    
})
export class AppModule{
   
}