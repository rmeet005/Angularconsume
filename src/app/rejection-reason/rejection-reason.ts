import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rejection-reason',
  imports: [DatePipe,CommonModule,FormsModule],
  templateUrl: './rejection-reason.html',
  styleUrl: './rejection-reason.scss'
})
export class RejectionReason {
http=inject(HttpClient)
userdata:any;

newRejectionReason: any = {
  reasonCode: "",
  reasonText: "",
   category: "",
  isActive:true,
  createdAt:""
  };

   ngOnInit(): void {
      this.getRejectionReason();
  }

  getRejectionReason(){
    this.http.get("http://localhost:5054/api/RejectionReason/FetchAllRejectionReasons").subscribe((result:any)=>{
       console.log(result);
      this.userdata=result;
    })

  }
   addRejectionReason() {
    this.newRejectionReason.createdAt = new Date();

    this.http.post("  http://localhost:5054/api/RejectionReason/AddRejectionReason", this.newRejectionReason)
      .subscribe((result: any) => {
        console.log("State added:", result);
        
        this.getRejectionReason();

        this.newRejectionReason = {
          reasonCode: "",
          reasonText: "",
          category: "",
          isActive:true,
          createdAt:""
        };
      });
}}
