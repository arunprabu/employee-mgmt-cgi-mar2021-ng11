import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1: Create an Obj for EventEmitter
  @Output() profileLoaded = new EventEmitter();  // Step 2: Make it as Custom Event using @Output()

  constructor() { }

  ngOnInit(): void {
  }

  handleSendDataBtnClick(): void {
    alert('Sending Data to Parent Comp');
    // Step 3: Emit the custom event with data
    this.profileLoaded.emit('Arun');
  }
}
