import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {

  employeeData: any;
  dupEmployeeData: any;
  isUpdated = false;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // read URL Param
    const employeeId = this.route.snapshot.paramMap.get('id');
    // TODO: learn about other ways to read url params

    this.employeeService.getEmployeeById(employeeId)
      .subscribe((res: any) => {
        console.log(res);
        this.employeeData = res;
      });
  }

  handleEditModalOpen(): void {
    this.dupEmployeeData = { ...this.employeeData };
  }

  async handleUpdate(employeeForm: NgForm): Promise<void> {
    console.log(this.dupEmployeeData);
    // console.log(employeeForm); // entire form state
    console.log(employeeForm.value);

    const status = await this.employeeService.updateEmployee(this.dupEmployeeData);
    console.log(status);

    if (status && status.id) {
      this.isUpdated = true;
    }
  }
}
