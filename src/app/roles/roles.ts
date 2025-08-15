import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule,DatePipe],
  templateUrl: './roles.html',
  styleUrl: './roles.scss'
})
export class Roles {

  http=inject(HttpClient)
  userdata:any;

newRole: any = {
  roleName: "",
  description: "",
  isActive:true
  };

   ngOnInit(): void {
      this.getroles();
  }

  getroles(){
    this.http.get("http://localhost:5054/api/Role/FetchAllRoles").subscribe((result:any)=>{
       console.log(result);
      this.userdata=result;
    })

  }
   addRole() {

    this.http.post("http://localhost:5054/api/Role/AddRole", this.newRole)
      .subscribe((result: any) => {
        console.log("Role added:", result);
        
        this.getroles();

        this.newRole = {
          roleName: "",
          description: "",
          isActive:true
        };
      });
}}
