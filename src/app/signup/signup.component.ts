import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
    data: any;
studentData:any;
url:string='/assets/products.json'
    options: any;
    constructor(private http: HttpClient){}
    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
this.http.get(this.url).subscribe(res=>{this.studentData=res})
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'line',
                    label: 'Dataset 1',
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    data: [50, 25, 12, 48, 56, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [21, 84, 24, 75, 37, 65, 34],
                    borderColor: 'white',
                    borderWidth: 2
                },
                {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
    }
    Employee: Course[] = [
        {
            EmployeeId: 1,
            Employeename: 'sharon',
            Age: 28,
            Salary: 60000,
            location: 'Cbe'
        },
        {
            EmployeeId: 2,
            Employeename: 'David',
            Age: 26,
            Salary: 70000,
            location: 'Cbe'
        },
        {
            EmployeeId: 3,
            Employeename: 'Hemanth',
            Age: 21,
            Salary: 20000,
            location: 'Cbe'
        },
        {
            EmployeeId: 4,
            Employeename: 'Harshan',
            Age: 21,
            Salary: 20000,
            location: 'Cbe'
        }, {
            EmployeeId: 5,
            Employeename: 'Hari',
            Age: 21,
            Salary: 20000,
            location: 'Cbe'
        }
    ]
    Car: Course[] = [
        {
            EmployeeId: 1,
            Employeename: 'sharon',
            Age: 28,
            Salary: 60000,
            location: 'Cbe'
        },
        {
            EmployeeId: 2,
            Employeename: 'David',
            Age: 26,
            Salary: 70000,
            location: 'Cbe'
        },
        {
            EmployeeId: 3,
            Employeename: 'Hemanth',
            Age: 21,
            Salary: 20000,
            location: 'Cbe'
        },
        {
            EmployeeId: 4,
            Employeename: 'Harshan',
            Age: 21,
            Salary: 20000,
            location: 'Cbe'
        }, {
            EmployeeId: 5,
            Employeename: 'Hari',
            Age: 21,
            Salary: 20000,
            location: 'Cbe'
        }
    ]
}
class Course {

    EmployeeId: number;
    Employeename: string;
    Age: number;
    Salary: number;
    location: string
    constructor(EmployeeId: number, Employeename: string, Age: number,Salary: number,location: string) {
        this.EmployeeId = EmployeeId;
        this.Employeename = Employeename;
        this.Age=Age;
        this.Salary=Salary;
        this.location=location;
    }
}

