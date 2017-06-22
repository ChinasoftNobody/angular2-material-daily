import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from "../common/common.service";

@Component({
  moduleId: module.id,
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  cardOnClick(routerKey: any) {
    this.router.navigate([routerKey]);
  }

  login() {
    this.commonService.init();
  }

  ngOnInit(): void {

  }

  constructor(private router: Router,
              private commonService: CommonService) {
  }
}
