import {Component, OnInit} from '@angular/core';
import {HttpService} from '../common/http.service';
import {ServerConfig} from '../config/server.config';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cards: any = [];

  ngOnInit(): void {
    this.httpService.post(this.serverConfig.getUrl('dashboard'), {
      pageNumber: 1,
      pageSize: 10,
      userName: 'string'
    }, data => {
      for (const item of data.content) {
        this.cards.push({name: item.id});
      }
    });

  }

  constructor(private httpService: HttpService,
              private serverConfig: ServerConfig) {
  }
}
