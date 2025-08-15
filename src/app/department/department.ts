import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department',
  imports: [DatePipe,CommonModule,FormsModule],
  templateUrl: './department.html',
  styleUrl: './department.scss'
})
export class Department {
http=inject(HttpClient)
userdata:any;

newDepartment: any = {
  departmentCode: "",
  departmentName: "",
   description: "",
  isActive:true,
  createdAt:""
  };

   ngOnInit(): void {
      this.getDepartment();
  }

  getDepartment(){
    this.http.get("http://localhost:5054/api/Department/FetchAllDepartments").subscribe((result:any)=>{
       console.log(result);
      this.userdata=result;
    })

  }
   addDepartment() {
    this.newDepartment.createdAt = new Date();

    this.http.post("http://localhost:5054/api/Department/AddDepartment", this.newDepartment)
      .subscribe((result: any) => {
        console.log("occupation type added:", result);
        
        this.getDepartment();

        this.newDepartment = {
           departmentCode: "",
          departmentName: "",
          description: "",
          isActive:true,
          createdAt:""
        };
      });
}}
