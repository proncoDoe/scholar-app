import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {


  feedback = {
    interesting1:'',interesting2:'', favorite1:'', favorite2:''
  };
  constructor() {

   }

  ngOnInit() {
  }

  onSubmit(form: NgForm){

    if(form.valid){

console.log('form', this.feedback);

    }

  }


}
