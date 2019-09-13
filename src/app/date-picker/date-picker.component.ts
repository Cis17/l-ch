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
  set weekNames(weekNames: string[]) {
    this._weekHeaders = Array.from({length: 7}, (v, k) => weekNames[k]);
  }

  get weekNames(): string[] {
    return this._weekHeaders;
  }

  @Input()
  set monthNames(monthNames: string[]) {
    this._monthNames = Array.from({length: 12}, (v, k) => monthNames[k]);
  }

  get monthNames(): string[] {
    return this._monthNames;
  }

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

  get selectedDate(): Date {
    if (this.year && this.month && this.day) {
      return new Date(this.year, this.month - 1, this.day);
    }
    return null;
  }

  get firstDateOffset() {
    return new Date(this.year, this.month, 1).getDay();
  }

  private _minDate = new Date('2018-01-01');
  private _maxDate = new Date('2039-12-31');
  private _weekHeaders = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  private _monthNames = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'];

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

  private isSameDate(date1, date2) {
    return !(date1 === null)
      && date1.getFullYear() === date2.getFullYear()
      && date1.getMonth() === date2.getMonth()
      && date1.getDate() === date2.getDate();
  }

  private isSelectedDate(year, month, day): boolean {
    const date2 = new Date(year, month - 1, day);
    return this.isSameDate(this.selectedDate, date2);
  }

  isSpecialDate(date): boolean {
    const result = this._specialDates.find( (d: Date) => this.isSameDate(d, date) );
    return result !== undefined;
  }

  isSpecialDate2(year, month, day): boolean {
    return this.isSpecialDate(new Date(year, month - 1, day));
  }

  getDataAsMatrix(myArray, cols, offset?) {
    const offsetDays = offset ? Array.from({length:  offset}, (v, k) => undefined) : [];
    const myArrayWithOffset = offsetDays.concat(myArray);

    const rowCount = Math.ceil(myArrayWithOffset.length / cols);
    return Array.from({length: rowCount}, (v, k) =>
      Array.from({length: cols}, (w, l) => myArrayWithOffset[k * cols + l])
    );
  }
}
