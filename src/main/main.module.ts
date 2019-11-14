import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal/personal.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { JobHistoryPageComponent } from './job-history-page/job-history-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AppModule } from 'src/app/app.module';



@NgModule({
  declarations: [PersonalComponent, ContactPageComponent, JobHistoryPageComponent, WelcomePageComponent, ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
