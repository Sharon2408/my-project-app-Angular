import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TimelineComponent } from './timeline/timeline.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
