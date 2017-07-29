import {Component} from '@angular/core';
import {PageEvent} from '@angular/material';
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
export class DeveloperComponent {

  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  dataSource: any | null = [{id: '1', name: '1'}];

  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  change(pageEvent: PageEvent) {
    debugger;
  }

}
