import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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

  ngOnInit(): void {

  }

  constructor(private router: Router) {
  }
}
