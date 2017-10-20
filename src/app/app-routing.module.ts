import { LoggedInGuard } from './guards/logged-in-guard.guard';
import { AssessmentComponent } from './assessment/assessment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateViaAuth } from './services/auth/can_activate_via_auth';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AssessmentComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [CanActivateViaAuth]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
