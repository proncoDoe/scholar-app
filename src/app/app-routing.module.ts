import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './components/classes/classes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FaqComponent } from './components/faq/faq.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ForgotEmailComponent } from './components/forgot-email/forgot-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { ModalComponent } from './components/modal/modal.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TabsComponent } from './components/tabs/tabs.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
   component:LoginComponent
  },

  {
    path: 'signup',
   component:SignUpComponent
  },


  {
    path: 'passwordEmail',
   component:ForgotEmailComponent
  },


  {
    path: 'forgotPassword',
   component:ForgotPasswordComponent
  },



  {
    path: 'feedback',
   component:FeedbackComponent
  },

  {
    path: 'tabs',
    component: TabsComponent,

    children: [
      {
        path: 'modal',
        component: ModalComponent,
      },

      {
        path: 'dashboard',
        component: DashboardComponent,
      },

      {
        path: 'classes',
        component: ClassesComponent
      },


      {
        path: 'schedule',
        component: ScheduleComponent
      },

    ]

  },


  {
    path: 'faq',
   component:FaqComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
