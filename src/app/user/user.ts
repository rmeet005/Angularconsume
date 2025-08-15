
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [DatePipe,CommonModule,FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User implements OnInit {

  http=inject(HttpClient)
  userdata:any;

   newUser: any = {
    userName: '',
    email: '',
    passwordHash: '',
    isActive: false,
    isDeleted: false,
    userroles: null
  };

  ngOnInit(): void {
      this.getusers();
  }

  getusers(){
    this.http.get("http://localhost:5054/api/User/FetchAllUsers").subscribe((result:any)=>{
      console.log(result);
      this.userdata=result;
    })

  }
   addUser() {

    this.newUser.createdAt = new Date();

    this.http.post("http://localhost:5054/api/User/AddUser", this.newUser)
      .subscribe((result: any) => {
        console.log("User added:", result);
        debugger;
        this.getusers();
        this.newUser = {
          userName: '',
          email: '',
          passwordHash: '',
          isActive: false,
          isDeleted: false,
          userroles: null
        };
      });

}
}
