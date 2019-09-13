import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'cc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lich';
  specialDates = [
    new Date(2019, 8, 13)
  ];
  ngOnInit(): void {
    this.specialDates.forEach(d => {
      console.log(d.toString());
    });
  }
}
