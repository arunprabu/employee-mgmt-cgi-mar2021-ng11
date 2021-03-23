import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'app-root', // exposes the selector -- element selector -- mandatory
  templateUrl: './app.component.html', // html -- mandatory -- only one
  styleUrls: ['./app.component.css'] // css -- optional -- can be multiple
})
export class AppComponent {
  // ts
  title = 'employee-mgmt-cgi-mar2021-ng11';
}
