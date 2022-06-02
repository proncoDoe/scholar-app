import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { SwiperModule } from 'swiper/angular';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaqComponent } from './components/faq/faq.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ForgotEmailComponent } from './components/forgot-email/forgot-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ClassesComponent } from './components/classes/classes.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ModalComponent } from './components/modal/modal.component';
import { ScheduleComponent } from './components/schedule/schedule.component';


@NgModule({
  declarations: [AppComponent,
    FaqComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    FeedbackComponent,
    ScheduleComponent,
    ForgotEmailComponent,
    ForgotPasswordComponent,
    ClassesComponent,
    TabsComponent,
    ModalComponent

  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), FontAwesomeModule, FormsModule, SwiperModule, AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
