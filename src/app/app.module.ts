import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import {FormsModule} from '@angular/forms';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [DatePickerComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const customElement = createCustomElement(DatePickerComponent, {injector: this.injector});
    customElements.define('lich-date-picker', customElement);
  }
}
