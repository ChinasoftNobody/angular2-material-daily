import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ServerConfig} from '../../config/server.config';
import {HttpService} from '../http.service';
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
  };

  keyLogin(event) {
    const key = window.event ? event.keyCode : event.which;
    if (key === 13) {
      this.login();
    } else if (key === 27) {
      this.closeDialog();
    }
  }

  login() {
    this.http.post(this.serverConfig.getUrl('login'), this.user, value => this.dialogRef.close(value), error => {
      this.dialogRef.close('failed');
    });
  }

  closeDialog() {
    this.dialogRef.close('close');
  }

  constructor(private http: HttpService,
              private serverConfig: ServerConfig,
              public dialogRef: MdDialogRef<LoginComponent>) {
  }
}
