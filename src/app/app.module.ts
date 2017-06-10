import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdDatepickerModule, MdDialogModule, MdGridListModule, MdIconModule,
  MdInputModule,
  MdSidenavModule, MdTabsModule, MdProgressSpinnerModule, MdListModule, MdListDivider
} from '@angular/material';

import {AppComponent} from './app.component';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRouterModule} from './app.router.module';
import {ScheduleComponent} from './schedule/schedule.component';
import {HeaderComponent} from './common/header.component';
import {AppLoadingComponent} from './common/app.loading.component';
import {HttpService} from './common/http.service';
import {ServerConfig} from './config/server.config';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, ScheduleComponent, HeaderComponent, AppLoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdSidenavModule,
    MdInputModule,
    MdDatepickerModule,
    MdCheckboxModule,
    MdGridListModule,
    MdTabsModule,
    MdDialogModule,
    MdCardModule,
    BrowserAnimationsModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdListModule,
    AppRouterModule
  ],
  providers: [HttpService, ServerConfig],
  bootstrap: [AppComponent],
  entryComponents: [AppLoadingComponent]
})
export class AppModule {
}

