import {Component, OnInit} from '@angular/core';
import {CommonService} from './common/common.service';
import {MdDialog} from '@angular/material';
import {LoginComponent} from './common/login/login.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  constructor(private commonService: CommonService) {
  }

  ngOnInit(): void {
    setTimeout(() => this.commonService.init(), 1000);
  }
}



