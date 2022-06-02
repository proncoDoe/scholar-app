import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.scss'],
})
export class ForgotEmailComponent implements OnInit {

  passwordEmail = {
    email:'',
  };

  constructor() { }

  ngOnInit() {}


  onSubmit(form: NgForm){

    if(form.valid){


     // console.log('form valid',form.value);

     console.log('form', this.passwordEmail);

    }

   }

}
