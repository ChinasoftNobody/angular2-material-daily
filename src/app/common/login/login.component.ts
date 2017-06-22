import {Component} from '@angular/core';
import {MdDialog} from '@angular/material';
@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any = {
    name: '',
    password: ''
  }
  ;

  login() {
    console.log(this.user);
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  constructor(private dialog: MdDialog) {
  }
}
