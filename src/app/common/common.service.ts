import {Injectable} from '@angular/core';
import {MdDialog} from '@angular/material';
import {LoginComponent} from './login/login.component';
import {Subject} from 'rxjs';
import {CookieService} from 'ngx-cookie';
@Injectable()
export class CommonService {
  private userSubject = new Subject<any>();
  userObservable = this.userSubject.asObservable();

  setUser(user: any) {
    this._cookieService.put('user', user);
    this.init();
  }

  init() {
    if (!this.getUser()) {
      this.dialog.closeAll();
      const dialogRef = this.dialog.open(LoginComponent, {disableClose: true, width: '800px', height: '600px'});
      dialogRef.afterClosed().subscribe(result => {
        if (result === 'failed') {
          this.init();
        } else if (result === 'close') {
          // do nothing
        } else {
          this.userSubject.next(result);
          this.setUser(result);
        }
      });
    }
  }

  getUser() {
    return this._cookieService.get('user');
  }

  constructor(private dialog: MdDialog,
              private _cookieService: CookieService) {
  }
}
