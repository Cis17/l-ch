import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'cc-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class DatePickerComponent implements OnInit {

  private active: 'year' | 'month' | 'day' = undefined;

  showPopup: boolean;
  finalDate: Date;

  @Input()
  set specialDayClass(rootClass: string) {
    this._specialDayClass = rootClass;
  }

  get specialDayClass(): string {
    return this._specialDayClass;
  }

  @Input()
   set dateFormat(format: string) {
     this._format = format;
   }

   get dateFormat(): string {
     return this._format;
   }

  @Input()
  set rootClass(rootClass: string) {
    this._rootClass = rootClass;
  }

  get rootClass(): string {
    return this._rootClass;
  }
  @Input()
  set weekNames(weekNames: string[]) {
    this._weekHeaders = Array.from({ length: 7 }, (v, k) => weekNames[k]);
  }

  get weekNames(): string[] {
    return this._weekHeaders;
  }

  @Input()
  set monthNames(monthNames: string[]) {
    this._monthNames = Array.from({ length: 12 }, (v, k) => monthNames[k]);
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
    if (day !== undefined) {
      this.showPopup = false;
      this.selected.emit(formatDate(new Date(this.year, this.month - 1, this.day), this.dateFormat, 'en-US'));
      console.log(formatDate(new Date(this.year, this.month - 1, this.day), this.dateFormat, 'en-US'));
    } else {
      this.showPopup = true;
    }
  }

  @Output() selected = new EventEmitter<string>();

  get day() {
    return this._day;
  }

  get years() {
    return this._years;
  }

  get months() {
    return Array.from({ length: 12 }, (v, k) => k + 1);
  }

  get days() {
    if (!this.month) {
      return [];
    }
    const days = new Date(this.year, this.month, 0).getDate();
    return Array.from({ length: days }, (v, k) => k + 1);
  }

  get selectedDate(): Date {
    if (this.year && this.month && this.day) {
      return new Date(this.year, this.month - 1, this.day);
    }
    return null;
  }

  get monthName() {
    return this.monthNames[this.month - 1];
  }

  get firstDateOffset() {
    return new Date(this.year, this.month, 1).getDay();
  }

  private _rootClass = 'date-picker-root';
  private _specialDayClass = 'lich-date-picker-special-date';
  private _minDate = new Date('2018-01-01');
  private _maxDate = new Date('2039-12-31');
  private _weekHeaders = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  private _monthNames = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'];

  private _years = [];
  private _year: number;
  private _month: number;
  private _day: number;
  private _format = 'yyyy-MM-dd';

  private _specialDates = [];


  constructor() {
    this.calculateYears();
  }

  ngOnInit() {
  }

  cleanYear() {
    this.showPopup = true;
    this.year = undefined;
  }

  private calculateYears() {
    const minYear = this._minDate.getFullYear();
    const maxYear = this._maxDate.getFullYear();
    this._years = Array.from({ length: maxYear - minYear + 1 }, (v, k) => k + minYear);
  }

  private isSameDate(date1, date2) {
    return !(date1 === null)
      && date1.getFullYear() === date2.getFullYear()
      && date1.getMonth() === date2.getMonth()
      && date1.getDate() === date2.getDate();
  }

  isSpecialDate(date): boolean {
    const result = this._specialDates.find((d: Date) => this.isSameDate(d, date));
    return result !== undefined;
  }

  isSpecialDate2(year, month, day): boolean {
    return this.isSpecialDate(new Date(year, month - 1, day));
  }

  getDataAsMatrix(myArray, cols, offset?) {
    const offsetDays = offset ? Array.from({ length: offset }, (v, k) => undefined) : [];
    const myArrayWithOffset = offsetDays.concat(myArray);

    const rowCount = Math.ceil(myArrayWithOffset.length / cols);
    return Array.from({ length: rowCount }, (v, k) =>
      Array.from({ length: cols }, (w, l) => myArrayWithOffset[k * cols + l])
    );
  }
}
