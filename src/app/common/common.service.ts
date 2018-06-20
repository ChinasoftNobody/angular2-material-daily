import {Injectable} from '@angular/core';
import {MdDialog} from '@angular/material';
import {LoginComponent} from './login/login.component';
import {Subject} from 'rxjs';
@Injectable()
export class CommonService {
  private userNameSubject = new Subject<any>();
  private userNameKey = 'userName';
  private userIdKey = 'userId';
  userNameObservable = this.userNameSubject.asObservable();

  setUser(user: any) {
    sessionStorage.setItem(this.userNameKey, user.name);
    sessionStorage.setItem(this.userIdKey, user.id);
    this.init();
  }

  init() {
    const _user: any = sessionStorage.getItem(this.userNameKey);
    this.dialog.closeAll();
    if (!_user) {
      const dialogRef = this.dialog.open(LoginComponent, {disableClose: true, width: '800px', height: '600px'});
      dialogRef.afterClosed().subscribe(result => {
        if (result === 'failed') {
          this.init();
        } else if (result === 'close') {
          // do nothing
        } else {
          this.userNameSubject.next(result);
          this.setUser(result);
        }
      });
    } else {
      this.userNameSubject.next(_user);
    }
  }

  logout() {
    sessionStorage.clear();
    this.userNameSubject.next('');
  }

  constructor(private dialog: MdDialog) {
  }
}
