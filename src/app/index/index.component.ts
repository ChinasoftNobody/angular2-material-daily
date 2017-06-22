import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../common/common.service';

@Component({
  moduleId: module.id,
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  userName = 'Login Here';

  cardOnClick(routerKey: any) {
    this.router.navigate([routerKey]);
  }

  login() {
    this.commonService.init();
  }

  ngOnInit(): void {
    this.commonService.userObservable.subscribe(user => this.userName = user.name);
  }

  constructor(private router: Router,
              private commonService: CommonService) {
  }
}
