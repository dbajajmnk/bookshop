import { Component, OnInit } from "@angular/core";
import { initializeApp } from "firebase/app";
import { AuthService } from "./auth/auth.service";
import { firebaseConfig } from "./firebase/firebasesetup";

@Component({
    selector:'app-root',
    templateUrl:'app.compontent.html',
    styleUrls:['app.compontent.css']
})
export class AppCompontnet implements OnInit{

    constructor(private authService:AuthService){
        
    }
    
    ngOnInit(): void {
        // Initialize Firebase
         initializeApp(firebaseConfig);
    }
    isAuthnicated():Boolean
    {
        return this.authService.isAuthnicated
    }

}