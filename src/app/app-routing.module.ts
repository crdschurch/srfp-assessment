import { LoggedInGuard } from './guards/logged-in-guard.guard';
import { AssessmentComponent } from './assessment/assessment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateViaAuth } from './services/auth/can_activate_via_auth';
import { AuthComponent } from './auth/auth.component';
import { ThankYouComponent } from 'app/thank-you/thank-you.component';

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
  },
  {
    path: 'thanks',
    component: ThankYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
