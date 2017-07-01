import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {MdDialog} from '@angular/material';
import {AppLoadingComponent} from './app.loading.component';
/**
 * Created by Administrator on 2017/5/28.
 */
@Injectable()
export class HttpService {
  constructor(private http: Http, public dialog: MdDialog) {
  }

  private openLoadingDialog() {
    this.dialog.open(AppLoadingComponent, {
      disableClose: true,
      width: '50px',
      height: '50px'
    });
  }

  post(url: string, body: any, resolve?: (value: any) => void, failed?: (error: string) => void) {
    this.openLoadingDialog();
    this.http.post(url, body).subscribe(data => {
      this.dialog.closeAll();
      if (data.json().status === 'failed') {
        failed(data.json().result);
      } else {
        resolve(data.json().result);
      }
    }, error => {
      console.error(error);
      this.dialog.closeAll();
    });
  }
}
