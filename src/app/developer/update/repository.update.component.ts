import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialog} from '@angular/material';
import {HttpService} from '../../common/http.service';
import {ServerConfig} from '../../config/server.config';
/**
 * Created by Administrator on 2017/7/30.
 */
@Component({
  moduleId: module.id,
  selector: 'app-developer-update',
  templateUrl: './repository.update.component.html',
  styleUrls: ['./repository.update.component.css'],
  providers: []
})
export class RepositoryUpdateComponent implements OnInit {

  repository: any = {
    id: '',
    name: '',
    url: '',
    urlType: '',
    description: ''
  };

  confirm(yes: boolean) {
    if (yes) {
      this.httpService.post(this.serverConfig.getUrl('repositoryUpdate'), this.repository, value => {
        this.dialog.closeAll();
      }, failed => {
      });
    } else {
      this.dialog.closeAll();
    }
  }

  constructor(@Inject(MD_DIALOG_DATA) public data: any,
              private dialog: MdDialog,
              private httpService: HttpService,
              private serverConfig: ServerConfig) {
  }

  ngOnInit(): void {
    if (!this.data.create) {
      this.repository.id = this.data.repository.id;
      this.repository.name = this.data.repository.name;
      this.repository.url = this.data.repository.url;
      this.repository.urlType = this.data.repository.urlType;
      this.repository.description = this.data.repository.description;
    }
  }
}
