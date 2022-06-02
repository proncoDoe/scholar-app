import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import SwiperCore, { SwiperOptions, Swiper, EffectFade, Autoplay, Pagination, EffectCube, EffectCoverflow } from 'swiper';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {

  public swiperConfig: SwiperOptions = {
    speed: 1000,
    grabCursor: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 25
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2.5,
        spaceBetween: 40
      }
    },
    pagination: { clickable: true },
    // scrollbar: { draggable: false },
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    loopFillGroupWithBlank:true,
    effect: 'coverflow',

    coverflowEffect:{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },


  };


  progress = 0;

  progress2 = 0;

  progress3 = 0;

  time!: number;

  time2!: number;

  time3!: number;

  constructor(private menuController: MenuController) {


    this.progress = Math.round((this.progress + .1)* 100) / 100;

   this.time = setInterval(() => {

      this.progress = Math.round((this.progress + .1)* 100) / 100;

      if(this.progress >= 20){

        clearInterval(this.time);

      }

    }, 5000);



    this.progress2 = Math.round((this.progress2 + .1)* 100) / 100;

    this.time2 = setInterval(() => {

       this.progress2 = Math.round((this.progress2 + .1)* 100) / 100;

       if(this.progress2 >= 35){

         clearInterval(this.time2);

       }

     }, 7000);



     this.progress3 = Math.round((this.progress3 + .1)* 100) / 100;

     this.time3 = setInterval(() => {

        this.progress3 = Math.round((this.progress3 + .1)* 100) / 100;

        if(this.progress3 >= 5){

          clearInterval(this.time3);

        }

      }, 10000);



  }

  ngOnInit() {
    this.menuController.enable(true, 'first');
    this.menuController.open('first');

    SwiperCore.use([Pagination,EffectCoverflow,EffectCube,Autoplay]);
  }


  onStop(){

    clearInterval(this.time);
  }


  onContnou(){

    this.time = setInterval(() => {

      this.progress = Math.round((this.progress + .1)* 100) / 100;

      if(this.progress >= 20){

        clearInterval(this.time);

      }

    }, 5000);

  }


  onContnou2(){

    this.time2 = setInterval(() => {

      this.progress2 = Math.round((this.progress2 + .1)* 100) / 100;

      if(this.progress2 >= 35){

        clearInterval(this.time2);

      }

    }, 7000);

  }



  onContnou3(){

    this.time3 = setInterval(() => {

      this.progress3 = Math.round((this.progress3 + .1)* 100) / 100;

      if(this.progress3 >= 5){

        clearInterval(this.time3);

      }

    }, 10000);

  }


}


