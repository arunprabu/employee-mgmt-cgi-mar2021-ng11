import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [
  ]
})
export class EmployeesComponent implements OnInit {

  employeeList: Employee[] = [];

  constructor( private employeeService: EmployeeService) {
    console.log('Inside Constructor');
  }

  ngOnInit(): void { // lifecycle hook
    // when the com comes into view ngOnInit will be called
    // ideal place for us to req to REST API
    console.log('Inside ngOnInit');
    this.employeeService.getEmployees()
      .subscribe( (res: Employee[]) => {
        console.log(res);
        this.employeeList = res;
      });

  }

}
