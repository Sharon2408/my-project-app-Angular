import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
    data: any;
batch35:any;
url:string='/assets/batch35.json'

userdata: any;
user:any;
url1:string='/assets/user.json'
    constructor(private http: HttpClient){}
    items: MenuItem[] = [];
    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
               
            },
            
        ];
 this.http.get(this.url).subscribe(res=>{this.batch35=res})
   this.http.get(this.url1).subscribe(str=>{this.user=str})     
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

ishidden=true
show(){
    this.ishidden=!this.ishidden
}



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

