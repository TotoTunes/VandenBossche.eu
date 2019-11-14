import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WelcomePageComponent } from 'src/main/welcome-page/welcome-page.component';
import { ContactPageComponent } from 'src/main/contact-page/contact-page.component';
import { PersonalComponent } from 'src/main/personal/personal.component';
import { JobHistoryPageComponent } from 'src/main/job-history-page/job-history-page.component';
import { MainModule } from 'src/main/main.module';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MainModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: WelcomePageComponent}, 
      {path: 'Welcome', component: WelcomePageComponent},
      {path: 'Contact', component: ContactPageComponent},
      {path: 'Personal', component: PersonalComponent},
      {path: 'Job-History', component: JobHistoryPageComponent}
    ])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
