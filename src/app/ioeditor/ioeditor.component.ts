import { Component, TestabilityRegistry } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IoboardService } from '../ioboard.service';

@Component({
  selector: 'app-ioeditor',
  templateUrl: './ioeditor.component.html',
  styleUrls: ['./ioeditor.component.scss']
})
export class IoeditorComponent {

  constructor(private _router: Router, private ioboardservice: IoboardService, private activatedRoute: ActivatedRoute) { }
  
  model: any;
  username = '';
  year = 2023;
  week = 7;

  
  years = [2023, 2024]
  weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]
  groups = [] as any;
  statuses = [] as any;

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get('username') as string;
    this.ioboardservice
      .getUser(this.username, this.year, this.week)
      .subscribe(data => {  this.model = data;
    });
    this.ioboardservice
      .getGroups()
        .subscribe(data => {  this.groups = data;
    });
    this.ioboardservice
      .getStatuses()
        .subscribe(data => {  this.statuses = data;
    });
  }

  onUpdate(){
    this.ioboardservice
      .getUser(this.username, this.year, this.week)
      .subscribe(data => {  this.model = data;
    });
  }
}
