import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
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

  links = [{
    title: 'Home',
    url: 'index'
  }];
  userName = 'Login Here';

  constructor(private router: Router,
              private commonService: CommonService) {
  }

  login() {
    this.commonService.init();
  }

  click(url) {
    this.router.navigate(['/' + url]);
  }

  ngOnInit(): void {
    this.commonService.userObservable.subscribe(user => this.userName = user.name);
  }
}
