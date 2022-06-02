import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

  forgetpassword = {
    confPassword:'',
    password:'',
  };

  constructor() { }

  ngOnInit() {}


  onSubmit(form: NgForm){

    if(form.valid){


     // console.log('form valid',form.value);

     console.log('form', this.forgetpassword);

    }

   }

}
