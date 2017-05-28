import {Component, OnInit} from '@angular/core';
import {HttpService} from "../common/http.service";

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cards: any = [];

  ngOnInit(): void {
    this.httpService.post('http://localhost:8080/daily/schedule/query', {
      pageNumber: 1,
      pageSize: 10,
      userName: 'string'
    }, data => {
      for (const item of data.content) {
        this.cards.push({name: item.id});
      }
    });

  }

  constructor(private httpService: HttpService) {
  }
}
