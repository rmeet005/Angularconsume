import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pincodes',
  imports: [DatePipe,CommonModule,FormsModule],
  templateUrl: './pincodes.html',
  styleUrl: './pincodes.scss'
})
export class Pincodes {
http=inject(HttpClient)
userdata:any;

newpincodes: any = {
  pincode: "",
  area: "",
   cityId: "",
   stateId: "",
   countryId: "",
  isActive:true,
  createdAt:""
  };

   ngOnInit(): void {
      this.getRejectionReason();
  }

  getRejectionReason(){
    this.http.get("http://localhost:5054/api/pincodes/FetchAllPincodes").subscribe((result:any)=>{
       console.log(result);
      this.userdata=result;
    })

  }
   addRejectionReason() {
    this.newpincodes.createdAt = new Date();

    this.http.post("http://localhost:5054/api/pincodes/AddPincode", this.newpincodes)
      .subscribe((result: any) => {
        console.log("State added:", result);
        
        this.getRejectionReason();

        this.newpincodes = {
         pincode: "",
          area: "",
          cityId: "",
          stateId: "",
          countryId: "",
          isActive:true,
          createdAt:""
        };
      });
}}
