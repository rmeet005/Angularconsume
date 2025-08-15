import { Routes } from '@angular/router';
import { User } from './user/user';
import { Userrole } from './userrole/userrole';
import { Roles } from './roles/roles';
import { States } from './states/states';
import { RejectionReason } from './rejection-reason/rejection-reason';
import { Pincodes } from './pincodes/pincodes';
import { OccupationType } from './occupation-type/occupation-type';
import { EmploymentType } from './employment-type/employment-type';
import { DocumentTypeComponent } from './documentType/documentType';
import { Department } from './department/department';

export const routes: Routes = [
  { path: '', component: User },
  { path: 'UserRole', component: Userrole },
  { path: 'Roles', component: Roles },
   { path: 'States', component:States },
   { path: 'RejectionReason', component:RejectionReason},
   { path: 'pincodes', component:Pincodes},
   { path: 'OccupationType', component:OccupationType},
    { path: 'EmploymentType', component:EmploymentType},
    { path: 'document-type', component: DocumentTypeComponent },
    { path: 'Department', component: Department }
];
