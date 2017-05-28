import {Component} from '@angular/core';
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
    right: false
  },
    {
      title: 'Tools',
      right: true
    }];
}
