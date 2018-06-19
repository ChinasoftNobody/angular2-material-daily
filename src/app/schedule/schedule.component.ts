import {Component, OnInit} from '@angular/core';
import {HttpService} from '../common/http.service';
import {DailyServer} from '../config/server.config';

@Component({
  moduleId: module.id,
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: []
})
export class ScheduleComponent implements OnInit {

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
  ngOnInit(): void {
  }

  constructor(private http: HttpService, private server: DailyServer) {
  }
}
