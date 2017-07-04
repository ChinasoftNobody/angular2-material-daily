import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {IndexComponent} from './index/index.component';
import {ScheduleComponent} from './schedule/schedule.component';
/**
 * Created by Administrator on 2017/5/28.
 */
const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'developer', component: ScheduleComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {
}

