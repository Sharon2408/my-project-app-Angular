import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

id=''
name=''
age=''
salary=''
location=''

name1='';

// Single Click
click(){
   this.name1='Welcome Brothers';
  
}

// Double Click
doubleclick='';
dblclick(){
   this.doubleclick='This is Double Click Event';
}
mousedown=''
mdown(){
   this.mousedown='This is Mouse Down'
}

mouseup=''
mup(){
   this.mouseup='This is Mouse Up'
}

mousehover=''
mhover(){
  this.mousehover='This is Mouse Hover'
}

mouseenter=''
menter(){
  this.mouseenter='This is Mouse Enter'
}
mouseleave=''
mleave(){
  this.mouseleave='This is Mouse Leave'
}
}
