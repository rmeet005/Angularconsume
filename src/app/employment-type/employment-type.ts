import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employment-type',
  imports: [DatePipe,CommonModule,FormsModule],
  templateUrl: './employment-type.html',
  styleUrl: './employment-type.scss'
})
export class EmploymentType {
http=inject(HttpClient)
userdata:any;

newEmploymentType: any = {
  typeCode: "",
  typeName: "",
   description: "",
  isActive:true,
  createdAt:""
  };

   ngOnInit(): void {
      this.getoccupationType();
  }

  getoccupationType(){
    this.http.get("http://localhost:5054/api/EmploymentType/FetchAllEmploymentTypes").subscribe((result:any)=>{
       console.log(result);
      this.userdata=result;
    })

  }
   addoccupationType() {
    this.newEmploymentType.createdAt = new Date();

    this.http.post("http://localhost:5054/api/EmploymentType/AddEmploymentType", this.newEmploymentType)
      .subscribe((result: any) => {
        console.log("occupation type added:", result);
        
        this.getoccupationType();

        this.newEmploymentType = {
         typeCode: "",
          typeName: "",
          description: "",
          isActive:true,
          createdAt:""
        };
      });
}}
