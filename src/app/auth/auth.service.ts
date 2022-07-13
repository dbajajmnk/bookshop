import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import LoginForm from '../model/lgoinform';
import RegistrationForm from '../model/registrationform';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoading:Boolean=false;
  isAuthnicated:Boolean=false;
  passwordisMatched:Boolean=true;
  

  register(registration:RegistrationForm)
  {
   

    if(registration.password!=registration.confirmPassword)
    {
      this.passwordisMatched=false
      return;
    }
    this.isLoading=true;
    const auth = getAuth();
createUserWithEmailAndPassword(auth,registration.email, registration.password)
  .then((userCredential) => {
    this.router.navigate(['login'])
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("There is some problem with Registration")
    // ..
  }).finally(()=>{
    this.isLoading=false
  });
  }
  login(lgoinform:LoginForm)
  {
    this.isLoading=true;
    const auth = getAuth();
signInWithEmailAndPassword(auth, lgoinform.email, lgoinform.password)
  .then((userCredential) => {
    // Signed in 
   
    this.isAuthnicated=true
    this.router.navigate([''])
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.isAuthnicated=false;
    alert("Credientals are not valid")
  }).finally(()=>{
    this.isLoading =false;
  });
  }
  logout()
  {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.isAuthnicated=false;
      this.router.navigate(["login"])
    }).catch((error) => {
      // An error happened.
    });
  }

  constructor(private router:Router) 
  { }
}
