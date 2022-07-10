import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppCompontnet } from "./app.compontent";
import { BooksModule } from "./books/books.module";

@NgModule({
    declarations:[AppCompontnet],
    imports:[BrowserModule,FormsModule,BooksModule],
    bootstrap:[AppCompontnet]
    
})
export class AppModule{}