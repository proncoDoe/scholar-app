import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit {


  progress = 0;
  time!: number;

  constructor(private menuController: MenuController) {

    this.progress = Math.round((this.progress + .1)* 100) / 100;

    this.time = setInterval(() => {

       this.progress = Math.round((this.progress + .1)* 100) / 100;

       if(this.progress >= 100){

         clearInterval(this.time);

       }

     }, 5000);


  }

  ngOnInit() {
    this.menuController.enable(true, 'first');
    this.menuController.open('first');
  }




  onStop(){

    clearInterval(this.time);
  }


  onContnou(){

    this.time = setInterval(() => {

      this.progress = Math.round((this.progress + .1)* 100) / 100;

      if(this.progress >= 100){

        clearInterval(this.time);

      }

    }, 5000);

  }




}
