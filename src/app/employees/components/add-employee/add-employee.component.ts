import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent implements OnInit {

  isSaved = false;

  // Step 1: Have the form tag equivalent
  addEmployeeForm: FormGroup = new FormGroup({
    // Step 2: let's have the input element equivalents
    name: new FormControl('Arun', Validators.required), // Step 5: Let's work on validation and go to HTML for step 6
    email: new FormControl('a@b.com', [Validators.required, Validators.email]),
    phone: new FormControl('1231412', Validators.required)
    // Refer add-empl.comp.html for Step 3
  });

  constructor(private employeeService: EmployeeService) { // 1. connect with the service usind dep injection

  }

  ngOnInit(): void {
  }

  handleAddEmployeeSubmit(): void {
    // console.log(this.addEmployeeForm); // find the whole state of the form
    console.log(this.addEmployeeForm.value);

    // 2. send the above data to the service
    this.employeeService.createEmployee(this.addEmployeeForm.value)
      .subscribe((res: any) => { // 3. get the res from the service
        console.log(res);
        if (res && res.id) {
          this.isSaved = true;
        }
      });

  }

}
