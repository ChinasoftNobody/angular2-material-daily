import {Component, OnInit} from '@angular/core';
import {CommonService} from './common.service';
/**
 * Created by Administrator on 2017/5/28.
 */
@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName = 'Login Here';

  constructor(private commonService: CommonService) {
  }

  login() {
    this.commonService.init();
  }

  ngOnInit(): void {
    this.commonService.userObservable.subscribe(user => this.userName = user.name);
  }
}
