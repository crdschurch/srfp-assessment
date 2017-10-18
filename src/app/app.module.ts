import { AppContentBlockConfig } from './app.contentblock.config';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authServiceFactory } from './services/auth/auth.service.provider';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, NavigationExtras } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentBlockModule, ContentBlockConfig } from 'crds-ng2-content-block';
import { AuthService } from './services/auth/auth.service';
import { CanActivateViaAuth } from './services/auth/can_activate_via_auth';
import { WindowRefService } from './services/window-ref.service';
import { AuthComponent } from './auth/auth.component';
import { ToastModule, ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { CustomOptions } from './app.toast.options';
import { PreloaderComponent } from './preloader/preloader.component';
import { environment } from '../environments/environment';
import { AnalyticsService } from './services/analytics.service';

import {
  Angulartics2Module,
  Angulartics2Segment,
  Angulartics2GoogleTagManager,
  Angulartics2GoogleAnalytics
} from 'angulartics2';

@NgModule({
  declarations: [AppComponent, HomeComponent, AuthComponent, PreloaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Angulartics2Module.forRoot([Angulartics2GoogleTagManager, Angulartics2GoogleAnalytics, Angulartics2Segment]),
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    ToastModule.forRoot(),
    ContentBlockModule
  ],
  providers: [
    { provide: AuthService, useFactory: authServiceFactory, deps: [] },
    { provide: ToastOptions, useClass: CustomOptions },
    { provide: ContentBlockConfig, useValue: AppContentBlockConfig },
    CanActivateViaAuth,
    WindowRefService,
    AnalyticsService,
    Angulartics2GoogleAnalytics,
    Angulartics2Segment
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private authService: AuthService, private router: Router) {
    authService.watch().subscribe(
      evt => {
        console.log(evt);
        if (evt.detail.currentValue === '' || evt.detail.currentValue === undefined) {
          // set the route we are currently at in a service/cookie?
          router.navigate(['/']);
        }
      },
      err => {
        router.navigate(['/']);
      }
    );
  }
}
