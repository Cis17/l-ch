import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'cc-date-picker',
  template: `
    <div>
      <select name="year">
        <option  value=""></option>
      </select>
      <input type="number" name="year">
      <input type="number" name="month">
      <input type="number" name="day">
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class DatePickerComponent implements OnInit {

  private active: 'year' |'month'|'day' = undefined;

  @Input()
  set min(minDate: string) {
    this._minDate = new Date(minDate);
  }
  get min(): string {
    return this._minDate.toDateString();
  }
  @Input()
  set max(maxDate: string) {
    this._maxDate = new Date(maxDate);
  }
  get max(): string {
    return this._maxDate.toDateString();
  }
  @Input()
  set year(year: number) {
    this._year = year;
  }
  get year() {
    return this._year;
  }
  @Input()
  set month(month: number) {
    this._month = month;
  }
  get month() {
    return this._month;
  }
  @Input()
  set day(day: number) {
    this._day = day;
  }
  get day() {
    return this._day;
  }

  _minDate = new Date('1900/01/01');
  _maxDate = new Date('3000/12/31');

  _year: number;
  _month: number;
  _day: number;



  constructor() {
    console.log(this.min, this._maxDate);
  }

  ngOnInit() {
  }

}
