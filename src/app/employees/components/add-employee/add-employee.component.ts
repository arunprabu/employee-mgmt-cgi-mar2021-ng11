import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent implements OnInit {

  // Step 1: Have the form tag equivalent
  addEmployeeForm: FormGroup = new FormGroup( {
    // Step 2: let's have the input element equivalents
    name: new FormControl('', Validators.required), // Step 5: Let's work on validation and go to HTML for step 6
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
    // Refer add-empl.comp.html for Step 3
  });

  constructor() { }

  ngOnInit(): void {
  }

  handleAddEmployeeSubmit(): void{
    console.log(this.addEmployeeForm);
  }

}
