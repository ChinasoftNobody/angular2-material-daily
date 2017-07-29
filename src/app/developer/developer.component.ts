import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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

  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  dataSource: any | null = [{id: '1', name: '1'}];

  ngOnInit() {
  }

}
