import {Component, OnInit} from '@angular/core';
import {CommonService} from './common.service';
import {Router} from '@angular/router';
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

  constructor(private commonService: CommonService,
              private router: Router) {
  }

  login() {
    this.commonService.init();
  }

  home() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.commonService.userObservable.subscribe(user => this.userName = user.name);
  }
}
