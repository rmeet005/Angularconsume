import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-occupation-type',
  imports: [DatePipe,CommonModule,FormsModule],
  templateUrl: './occupation-type.html',
  styleUrl: './occupation-type.scss'
})
export class OccupationType {
http=inject(HttpClient)
userdata:any;

newOccupationType: any = {
  occupationCode: "",
  occupationName: "",
   description: "",
  isActive:true,
  createdAt:""
  };

   ngOnInit(): void {
      this.getoccupationType();
  }

  getoccupationType(){
    this.http.get("http://localhost:5054/api/OccupationType/FetchAllOccupationTypes").subscribe((result:any)=>{
       console.log(result);
      this.userdata=result;
    })

  }
   addoccupationType() {
    this.newOccupationType.createdAt = new Date();

    this.http.post("http://localhost:5054/api/OccupationType/AddOccupationType", this.newOccupationType)
      .subscribe((result: any) => {
        console.log("occupation type added:", result);
        
        this.getoccupationType();

        this.newOccupationType = {
         occupationCode: "",
        occupationName: "",
        description: "",
        isActive:true,
        createdAt:""
        };
      });
}}
