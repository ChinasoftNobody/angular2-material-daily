import {Component, OnInit} from '@angular/core';
import {CommonService} from './common/common.service';
import {MdDialog} from '@angular/material';
import {AppLoadingComponent} from "./common/app.loading.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  constructor(private commonService: CommonService, private dialog: MdDialog) {
  }

  ngOnInit(): void {
    this.dialog.open(AppLoadingComponent, {
      disableClose: true,
      width: '50px',
      height: '50px'
    });
    setTimeout(() => this.commonService.init(), 1000);
  }
}



