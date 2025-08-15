import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userrole',
  imports: [DatePipe,CommonModule,FormsModule],
  templateUrl: './userrole.html',
  styleUrl: './userrole.scss'
})
export class Userrole {
  http=inject(HttpClient)
  userdata:any;

   newRole: any = {
  userId: "",
  roleId: "",
  assignedAt:""
  };

  ngOnInit(): void {
      this.getroles();
  }

  getroles(){
    this.http.get("http://localhost:5054/api/UserRole/FetchAllUserRoles").subscribe((result:any)=>{
      // console.log(result);
      this.userdata=result;
    })

  }
   addRole() {

    this.newRole.assignedAt = new Date();

    this.http.post("http://localhost:5054/api/UserRole/AddUserRole", this.newRole)
      .subscribe((result: any) => {
        console.log("UserRole added:", result);
        
        this.getroles();

        this.newRole = {
          userId: "",
          roleId: "",
          assignedAt:""
        };
      });

}}
