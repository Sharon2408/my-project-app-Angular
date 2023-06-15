import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FormComponent } from './form/form.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserComponent } from './browser/browser.component';
const routes: Routes = [
  {
    path:"home", component:HomeComponent
  },
  {
    path:"navbar",component:NavbarComponent
  },
  {
    path:"accordion",component:AccordionComponent
  },
  {
    path:"timeline",component:TimelineComponent
  },
  {
    path:"form",component:FormComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"browser",component:BrowserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
