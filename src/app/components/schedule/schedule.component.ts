import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { ModalController } from '@ionic/angular';
import SwiperCore, { SwiperOptions, EffectCards,  Mousewheel, Autoplay, Pagination } from 'swiper';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {


  studentTable = [
    {
      sMon: 'Mon',
      sSubject: 'English',
      sDuration: '3hrs',
      tName: 'John Doe',
      tImage: '../../../assets/images/avatar.png',
    },
    {
      sMon: 'Tue',
      sSubject: 'Math',
      sDuration: '5hrs',
      tName: 'Mike Wuu',
      tImage: '../../../assets/images/info-box9.png',
    },

    {
      sMon: 'Mon',
      sSubject: 'E-conomics',
      sDuration: '4hrs',
      tName: 'link Sink',
      tImage: '../../../assets/images/avatar7.png',
    },

    {
      sMon: 'Fri',
      sSubject: 'Biology',
      sDuration: '2hrs',
      tName: 'link Sink',
      tImage: '../../../assets/images/teammember3.png',
    }

  ];

  today: number = Date.now();


  public swiperConfig: SwiperOptions = {
    speed: 1000,
    grabCursor: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 25
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 40
      }
    },
    // pagination: { clickable: true },
    // scrollbar: { draggable: false },
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    loopFillGroupWithBlank:true,


    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },


  };

  constructor(private menuController: MenuController, public modalController: ModalController) { }

  ngOnInit() {

    this.menuController.enable(true, 'first');
    this.menuController.open('first');
    SwiperCore.use([Pagination,Mousewheel,EffectCards,Autoplay]);
  }



  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

  onOpenMenu(){


  }

}


