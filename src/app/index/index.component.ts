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
  pageInfo: any = {
    pageNumber: 0,
    pageSize: 10,
    userName: 'string',
    total: 0
  };

  cardOnClick(cardId: any) {
    console.log(cardId);
  }

  cardPageSelect(pageInfo) {
    this.pageInfo.pageNumber = pageInfo.number;
    this.pageInfo.pageSize = pageInfo.size;
    this.httpService.post(this.serverConfig.getUrl('index'), this.pageInfo, data => {
      this.pageInfo.total = data.totalElements;
      this.cards = [];
      for (const item of data.content) {
        this.cards.push({name: item.id});
      }
    });
  }

  ngOnInit(): void {
    this.httpService.post(this.serverConfig.getUrl('index'), this.pageInfo, data => {
      this.pageInfo.total = data.totalElements;
      this.cards = [];
      for (const item of data.content) {
        this.cards.push({name: item.id});
      }
    });

  }

  constructor(private httpService: HttpService,
              private serverConfig: ServerConfig) {
  }
}
