import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdDatepickerModule, MdDialogModule, MdGridListModule, MdIconModule,
  MdInputModule,
  MdSidenavModule, MdTabsModule, MdProgressSpinnerModule, MdListModule, MdListDivider, MdToolbar, MdToolbarModule,
  MdMenuModule, MdTableModule, MdPaginatorModule
} from '@angular/material';

import {AppComponent} from './app.component';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IndexComponent} from './index/index.component';
import {AppRouterModule} from './app.router.module';
import {ScheduleComponent} from './schedule/schedule.component';
import {HeaderComponent} from './common/header.component';
import {AppLoadingComponent} from './common/app.loading.component';
import {HttpService} from './common/http.service';
import {ServerConfig} from './config/server.config';
import {PaginationComponent} from './common/pagination/pagenation.component';
import {CopyrightComponent} from './common/copyright/copyright.component';
import {LoginComponent} from './common/login/login.component';
import {CommonService} from './common/common.service';
import {CookieModule} from 'ngx-cookie';
import {DeveloperComponent} from './developer/developer.component';
import {RepositoryUpdateComponent} from './developer/update/repository.update.component';

@NgModule({
  declarations: [
    AppComponent, IndexComponent, ScheduleComponent, HeaderComponent, AppLoadingComponent, PaginationComponent, CopyrightComponent,
    LoginComponent, DeveloperComponent, RepositoryUpdateComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, MdButtonModule, MdSidenavModule, MdInputModule, MdDatepickerModule, MdCheckboxModule,
    MdGridListModule, MdTabsModule,
    MdDialogModule,
    MdCardModule,
    BrowserAnimationsModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdListModule,
    AppRouterModule,
    MdToolbarModule,
    MdTableModule,
    MdMenuModule,
    MdPaginatorModule,
    CookieModule.forRoot()
  ],
  providers: [HttpService, ServerConfig, CommonService],
  bootstrap: [AppComponent, CopyrightComponent],
  entryComponents: [AppLoadingComponent, LoginComponent, RepositoryUpdateComponent]
})
export class AppModule {
}

