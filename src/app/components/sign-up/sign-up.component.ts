import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  isSignup = true;

  signUpform = {
    firstName:'', surName:'',lastName:'', male: false, female: false, date: false,
    email:'',password:'', confPassword:''
  };

  constructor() {


   }

  ngOnInit() {
  }



  signupUser(){


    this.isSignup = !this.isSignup;
  }



  // dateValue(ev){
  //   console.log(ev);
  //   this.signUpform.dobYear = new Date(ev.detail.value).getFullYear();
  // }


  // monthValue(ev){
  //   console.log(ev);
  //   this.signUpform.dobMonth = new Date(ev.detail.value).getMonth() + 1;
  // }

  // dayValue(ev){
  //   this.signUpform.dobDay = new Date(ev.detail.value).getDate();
  //   console.log( this.signUpform.dobDay);

  // }


  onSubmit(form: NgForm){

    if(form.valid){

      if(!this.signUpform.male && !this.signUpform.female){

        alert('Check box is required');

      }else{


        console.log('form', this.signUpform);

      }

      // console.log('form valid',form.value);

     }

  }
}
