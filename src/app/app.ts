import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Userrole } from './userrole/userrole';
import { Roles } from './roles/roles';
import { States } from './states/states';
import { RejectionReason } from './rejection-reason/rejection-reason';
import { Pincodes } from './pincodes/pincodes';
import { OccupationType } from './occupation-type/occupation-type';
import { EmploymentType } from './employment-type/employment-type';
import {DocumentTypeComponent } from './documentType/documentType';
import { Department } from './department/department';


@Component({
  selector: 'app-root',
  imports: [RouterModule,RouterOutlet,User,Userrole,Roles,States,RejectionReason,Pincodes,OccupationType,EmploymentType,DocumentTypeComponent,Department],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('RFQConsume');
}
