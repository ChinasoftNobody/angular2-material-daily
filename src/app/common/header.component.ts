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
  userName = 'NA';
  logged = false;

  constructor(private commonService: CommonService,
              private router: Router) {
  }

  login() {
    this.commonService.init();
  }

  logout() {
    this.commonService.logout();
  }

  home() {
    this.router.navigate(['/']).then();
  }

  ngOnInit(): void {
    this.commonService.userNameObservable.subscribe(userName => {
      this.userName = userName;
      if (userName !== '') {
        this.logged = true;
      }else {
        this.logged = false;
      }
    });
  }
}
