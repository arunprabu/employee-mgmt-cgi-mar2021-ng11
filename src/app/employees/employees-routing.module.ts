import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

// Feature Routing Module
const routes: Routes = [
  {
    path: 'employees', children: [
      { path: '', component: EmployeesComponent },
      { path: 'add', component: AddEmployeeComponent },
      { path: ':id', component: EmployeeDetailsComponent }, // id is the URL Param
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes) // registering the child routes
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeesRoutingModule { }
