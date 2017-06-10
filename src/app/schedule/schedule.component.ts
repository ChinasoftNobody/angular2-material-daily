import {Component, OnInit} from '@angular/core';
import {HttpService} from '../common/http.service';
import {ServerConfig} from '../config/server.config';

@Component({
  moduleId: module.id,
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: []
})
export class ScheduleComponent implements OnInit {
  tiles = [];
  title: any = [
    '日', '一', '二', '三', '四', '五', '六'
  ];
  scheduleList: any = {};

  ngOnInit(): void {
    this.http.post(this.server.getUrl('calendar'), {month: ''}, data => {
      data.forEach((item, index) => {
        this.tiles.push({
          text: item.day, cols: 1, rows: 1, color: 'lightblue'
        });
      });
    });
    this.http.post(this.server.getUrl('schedule_list'), {pageNumber: 1, pageSize: 10, userName: 'string'}, data => {
      this.scheduleList = data;
    });
  }

  constructor(private http: HttpService, private server: ServerConfig) {
  }
}
