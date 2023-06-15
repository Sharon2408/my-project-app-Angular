import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FormComponent } from './form/form.component';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { CheckboxModule } from 'primeng/checkbox';
import { SignupComponent } from './signup/signup.component';
import { ChartModule } from 'primeng/chart';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { BrowserComponent } from './browser/browser.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AccordionComponent,
    TimelineComponent,
    FormComponent,
    SignupComponent,
    BrowserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    TimelineModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    DataViewModule,
    CheckboxModule,
    ChartModule,
   ConfirmPopupModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
