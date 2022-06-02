import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  modalForm = {

    task: '',
    checkme: false
  };

  today: number = Date.now();

  constructor(public modalController: ModalController) { }



  ngOnInit() {}

  dismiss(){

    this.modalController.dismiss();

  }

  onSubmit(form: NgForm){

   if(form.valid){

    if(!this.modalForm.checkme){

      alert('Check box is rquired');

    }else{

      console.log('form', this.modalForm);
    }


   }

  }





}
