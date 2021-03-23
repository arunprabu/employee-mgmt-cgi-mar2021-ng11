import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // string interpolation related
  appName = 'Employee Mgmt App';

  // property binding related
  companyName = 'CGI';

  profile = {
    name: 'John',
    city: 'London'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
