import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppCompontnet } from "./app.compontent";
import { BookComponent } from './book/book.component';

@NgModule({
    declarations:[AppCompontnet, BookComponent],
    imports:[BrowserModule,FormsModule],
    bootstrap:[AppCompontnet]
    
})
export class AppModule{}