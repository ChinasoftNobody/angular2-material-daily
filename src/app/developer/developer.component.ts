import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material';
import {HttpService} from "../common/http.service";
import {ServerConfig} from "../config/server.config";
/**
 * Created by Administrator on 2017/7/22.
 */
@Component({
  moduleId: module.id,
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
  providers: []
})
export class DeveloperComponent implements OnInit {
  pageInfo: any = {
    length: 0,
    pageNumber: 0,
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 100],
    content: []
  };

  change(pageEvent: PageEvent) {
    this.pageInfo.pageNumber = pageEvent.pageIndex;
    this.pageInfo.pageSize = pageEvent.pageSize;
    this.listQuery();
  }
  listQuery() {
    this.httpService.post(this.serverConfig.getUrl('repositoryList'), {
      pageNumber: this.pageInfo.pageNumber,
      pageSize: this.pageInfo.pageSize,
      keywords: ''
    }, data => {
      this.pageInfo.content = data.content;
      this.pageInfo.length = data.totalElements;
    }, failed => console.error(failed));
  }
  ngOnInit(): void {
    this.listQuery();
  }

  constructor(private httpService: HttpService,
              private serverConfig: ServerConfig) {
  }
}
