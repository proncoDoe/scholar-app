import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  isLogin = true;
  scholarName =  'Hello Nikita';
  title =  'Welcome to scholar Tracker';

  signInform = {
    email:'',
    password:'',
    check: false
  };

  constructor(private menuController: MenuController) { }

  ngOnInit() {
    this.menuController.close();
  }


  loginUser(){

    this.isLogin = !this.isLogin;


  }

  onSubmit(form: NgForm){

   if(form.valid){


    if(!this.signInform.check){

      alert('Check box is required');

    }else{


      console.log('form', this.signInform);

    }

    // console.log('form valid',form.value);

   }

  }

}
