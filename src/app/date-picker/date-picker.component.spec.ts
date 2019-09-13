import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePickerComponent } from './date-picker.component';
import { FormsModule } from '@angular/forms';

describe('DatePickerComponent', () => {
  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute set weekNames OK', () => {
    component.weekNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    expect(component).toBeTruthy();
  });

  it('should execute get weekNames OK', () => {
    const a = component.weekNames;
    console.log(a);
    expect(component).toBeTruthy();
  });

  it('should execute set monthNames OK', () => {
    component.monthNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    expect(component).toBeTruthy();
  });

  it('should execute get monthNames OK', () => {
    const a = component.monthNames;
    console.log(a);
    expect(component).toBeTruthy();
  });

  it('should execute set specialDates OK', () => {
    component.specialDates = [new Date()];
    expect(component).toBeTruthy();
  });

  it('should execute get specialDates OK', () => {
    const a = component.specialDates;
    console.log(a);
    expect(component).toBeTruthy();
  });

  it('should execute set minDate OK', () => {
    component.minDate = new Date();
    expect(component).toBeTruthy();
  });

  it('should execute get minDate OK', () => {
    const a = component.minDate;
    console.log(a);
    expect(component).toBeTruthy();
  });

  it('should execute set maxDate OK', () => {
    component.maxDate = new Date();
    expect(component).toBeTruthy();
  });

  it('should execute get maxDate OK', () => {
    const a = component.maxDate;
    console.log(a);
    expect(component).toBeTruthy();
  });

  it('should execute set year OK', () => {
    component.year = 2000;
    expect(component).toBeTruthy();
  });

  it('should execute get year OK', () => {
    const a = component.year;
    console.log(a);
    expect(component).toBeTruthy();
  });

  it('should execute set day OK', () => {
    component.day = 10;
    expect(component).toBeTruthy();
  });

  it('should execute get day OK', () => {
    const a = component.day;
    console.log(a);
    expect(component).toBeTruthy();
  });

  it('should execute get years OK', () => {
    const a = component.years;
    console.log(a);
    expect(component).toBeTruthy();
  });

  it('should execute get months OK', () => {
    const a = component.months;
    console.log(a);
    expect(component).toBeTruthy();
  });

  it('should execute get days OK', () => {
    const a = component.days;
    console.log(a);
    expect(component).toBeTruthy();
  });

  it('should execute get days OK', () => {
    component.month = 10;
    const a = component.days;
    console.log(a);
    expect(component).toBeTruthy();
  });

  it('should execute get selectedDate OK', () => {
    component.year = 2000;
    component.month = 10;
    component.day = 10;
    const a = component.selectedDate;
    console.log(a);
    expect(component).toBeTruthy();
  });

  it('should execute get firstDateOffset OK', () => {
    component.year = 2000;
    component.month = 10;
    component.day = 10;
    const a = component.firstDateOffset;
    console.log(a);
    expect(component).toBeTruthy();
  });

  it('should execute get cleanYear OK', () => {
    component.cleanYear();
    expect(component).toBeTruthy();
  });

  it('should execute get isSpecialDate OK', () => {
    component.isSpecialDate(new Date());
    expect(component).toBeTruthy();
  });

  it('should execute get getDataAsMatrix OK', () => {
    component.getDataAsMatrix(2000, 10, 11);
    expect(component).toBeTruthy();
  });
});
