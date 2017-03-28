import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, NavigationExtras } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { ContentBlockModule } from 'crds-ng2-content-block';
import { AuthService } from './services/auth/auth.service';
import authServiceFactory from './services/auth/auth.service.provider';
import { CanActivateViaAuth } from './services/auth/can_activate_via_auth';
import { environment } from '../environments/environment';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    // ContentBlockModule.forRoot({ categories: Array('main', 'common'), endpoint: environment.crdsEndpoint })
  ],
  providers: [ {
    provide: AuthService,
    useFactory: authServiceFactory,
    deps: []}
    , CanActivateViaAuth],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private authService: AuthService, private router: Router) {
    authService.watch().subscribe( (evt) => {
      console.log(evt);
      if (evt.detail.currentValue === '' || evt.detail.currentValue === undefined) {
        // set the route we are currently at in a service/cookie?
        router.navigate(['/']);
      }
    }, (err) => {
      router.navigate(['/']);
    });
  }
}
