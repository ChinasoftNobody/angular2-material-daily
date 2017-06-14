import {Component, OnInit} from '@angular/core';
import {HttpService} from '../common/http.service';
import {ServerConfig} from '../config/server.config';

@Component({
  moduleId: module.id,
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  cards: any = [];

  cardOnClick(cardId: any) {
    console.log(cardId);
  }

  ngOnInit(): void {
    this.httpService.post(this.serverConfig.getUrl('index'), {
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
