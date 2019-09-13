import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cc-date-picker',
  template: `
    <p>
      date-picker works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class DatePickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
