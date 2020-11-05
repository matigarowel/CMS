import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PinsComponent } from './pins/pins.component';
import { UsersComponent } from './users/users.component';
import { TimecardComponent } from './timesheet/timecard/timecard.component';
import { UserComponent } from './overtime/user/user.component';

const routes: Routes = [
  { 
    path: 'timesheet/timecard', component: TimecardComponent,
  },
  { 
    path: 'overtime/myovertime', component: UserComponent,
  },
  { path: '',
    redirectTo: '/timesheet/timecard',
    pathMatch: 'full'
  },
  { path: '**', component: TimecardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
