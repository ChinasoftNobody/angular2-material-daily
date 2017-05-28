import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdDatepickerModule, MdDialogModule, MdGridListModule, MdIconModule,
  MdInputModule,
  MdSidenavModule, MdTabsModule
} from '@angular/material';

import {AppComponent} from './app.component';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRouterModule} from './app.router.module';
import {TaskComponent} from './task/task.component';
import {HeaderComponent} from './common/header.component';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, TaskComponent, HeaderComponent
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
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

