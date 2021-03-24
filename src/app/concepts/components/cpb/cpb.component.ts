import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1 of CPB: Create a custom property
  @Input() age = 20; // @Input() will make the variable as custom property

  constructor() { }

  ngOnInit(): void {
  }

}
