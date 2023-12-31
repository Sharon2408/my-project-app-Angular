import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name = "SHARON"
  // Component to view
  getDetils(): string {
    return this.name;
  }
  // Property Binding
  title = "Angular"
  isDisabled = false;

  // Content Security

  inject = `I am danger<script>alert("Script Injection")<script/>`;

  img = "data:image/png;base64,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"


  color = "pink"

  // View to Component
  // Event Binding

  count = 0;
  click() {
    this.count++;

  }


  largest(n1: number, n2: number): number {

    return Math.max(n1, n2)

  }
  // Event payload
  value = ''
  getvalue(event: any) {
    this.value = (event.target as HTMLInputElement).value;

  }
  // Template reference
  value1 = ''
  getvalue1(val: any) {
    this.value1 = val.value

  }

  value2 = ''
  value3 = ''
  value4 = ''
  value5 = ''
  value6 = ''
  clear() {
    this.value6 = ''

  }

  trainees: Course[] = [
    {
      traineeId: 1,
      traineename: 'sharon'
    },
    {
      traineeId: 2,
      traineename: 'sharon'
    },
    {
      traineeId: 3,
      traineename: 'sharon'
    }
  ]

}

class Course {
  
  traineeId: number;
  traineename: string;
  constructor(traineeId: number,traineename: string){
this.traineeId=traineeId;
this.traineename=traineename;
  }
}
