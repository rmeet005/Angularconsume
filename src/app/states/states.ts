import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-states',
  imports: [FormsModule,CommonModule,DatePipe],
  templateUrl: './states.html',
  styleUrl: './states.scss'
})
export class States {
http=inject(HttpClient)
 userdata:any;

newState: any = {
  stateName: "",
  countryId: "",
  isActive:true
  };

   ngOnInit(): void {
      this.getstate();
  }

  getstate(){
    this.http.get("http://localhost:5054/api/States/FetchAllStates").subscribe((result:any)=>{
       console.log(result);
      this.userdata=result;
    })

  }
   addState() {

    this.http.post("http://localhost:5054/api/States/AddState", this.newState)
      .subscribe((result: any) => {
        console.log("State added:", result);
        
        this.getstate();

        this.newState = {
          stateName: "",
          countryId: "",
          isActive:true
        };
      });
}}
