import {Component} from '@angular/core';
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
export class HeaderComponent {
  links = [{
    title: 'Dashboard',
    url: 'index'
  },
    {
      title: 'Schedule',
      url: 'schedule'
    }];

  constructor(private router: Router) {
  }

  click(url) {
    this.router.navigate(['/' + url]);
  }
}
