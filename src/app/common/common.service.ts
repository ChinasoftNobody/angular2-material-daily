import {Injectable} from '@angular/core';
import {MdDialog} from '@angular/material';
import {LoginComponent} from './login/login.component';
@Injectable()
export class CommonService {
  private user: any;

  setUser(user: any) {
    this.user = user;
    this.init();
  }

  init() {
    if (!this.user) {
      this.dialog.closeAll();
      this.dialog.open(LoginComponent, {disableClose: true, width: '800px', height: '600px'});
    }
  }

  getUser() {
    return this.user;
  }

  constructor(private dialog: MdDialog) {
  }
}
