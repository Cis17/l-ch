import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cc-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class DatePickerComponent implements OnInit {

  private active: 'year' | 'month' | 'day' = undefined;

  @Input()
  set specialDates(specialDates: Date[]) {
    this._specialDates = specialDates;
  }

  get specialDates(): Date[] {
    return this._specialDates;
  }

  @Input()
  set minDate(minDate: Date) {
    this.calculateYears();
    this._minDate = minDate;
  }

  get minDate(): Date {
    return this._minDate;
  }

  @Input()
  set maxDate(maxDate: Date) {
    this.calculateYears();
    this._maxDate = maxDate;
  }

  get maxDate(): Date {
    return this._maxDate;
  }

  @Input()
  set year(year: number) {
    this._year = year;
    this.month = undefined;
  }

  get year() {
    return this._year;
  }

  @Input()
  set month(month: number) {
    this._month = month;
    this.day = undefined;
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

  get years() {
    return this._years;
  }

  get months() {
    return Array.from({length: 12}, (v, k) => k + 1);
  }

  get days() {
    if (!this.month) {
      return [];
    }
    const days = new Date(this.year, this.month, 0).getDate();
    return Array.from({length: days}, (v, k) => k + 1);
  }

  private _minDate = new Date('1900-01-01');
  private _maxDate = new Date('3000-12-31');

  private _years = [];
  private _year: number;
  private _month: number;
  private _day: number;

  private _specialDates = [];


  constructor() {
    this.calculateYears();
  }

  ngOnInit() {
  }

  private calculateYears() {
    const minYear = this._minDate.getFullYear();
    const maxYear = this._maxDate.getFullYear();
    this._years = Array.from({length: maxYear - minYear + 1}, (v, k) => k + minYear);
  }
}
