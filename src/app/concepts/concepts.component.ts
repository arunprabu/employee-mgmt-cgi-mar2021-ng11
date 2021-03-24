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
  };

  // two way binding related
  courseName = 'Angular';

  personAge = 25;

  // for custom event binding
  dataReceivedFromChildComp = '';

  isLoggedIn = true;

  skillList = [ 'angular', 'react', 'nodejs'];

  constructor() { }

  ngOnInit(): void {
  }

  // event binding related
  handleClickMe(event: any): void{
    console.log(event); // event obj
    // TODO: change the label to 'Clicked' and disable the button
    alert('clicked');
  }

  // Step 5 of CEB:
  handleProfileLoaded(event: any): void {
    console.log(event);
    // Step 6 of CEB: Have the data stored in a variable
    this.dataReceivedFromChildComp = event;
  }

}
