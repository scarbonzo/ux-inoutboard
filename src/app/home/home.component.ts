import { Component } from '@angular/core';
import { IoboardService } from '../ioboard.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  mgmtusers = [] as any;
  coreusers = [] as any;
  year = new Date().getFullYear();
  week = this.getWeekofYear();
  
  showStatus = true;
  showHours = true;
  showNotes = true;
  
  dayOfWeekName = new Date().toLocaleString(
    'default', {weekday: 'long'}
  );

  constructor(private ioboardservice: IoboardService) { }

  ngOnInit(): void {
    this.ioboardservice
      .getGroupUsers("Management", this.year, this.week)
        .subscribe(data => {  this.mgmtusers = data;
    });
    this.ioboardservice
      .getGroupUsers("Core", this.year, this.week)
        .subscribe(data => {  this.coreusers = data;
    });
  }

  getWeekofYear(): number {
    var date = new Date();
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
  }
}
