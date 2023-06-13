import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimelineModule } from 'primeng/timeline';
import { TimelineComponent } from './timeline/timeline.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AccordionComponent,
    TimelineComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    TimelineModule,
    ButtonModule,
    CardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
