import { LoggedInGuard } from './guards/logged-in-guard.guard';
import { AnalyticsService } from './services/analytics.service';
import {
  Angulartics2GoogleAnalytics,
  Angulartics2GoogleTagManager,
  Angulartics2Module,
  Angulartics2Segment
} from 'angulartics2';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth/auth.service';
import { authServiceFactory } from './services/auth/auth.service.provider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CanActivateViaAuth } from './services/auth/can_activate_via_auth';
import { CookieModule } from 'ngx-cookie';
import { ContentBlockConfig, ContentBlockModule, IContentBlockConfig } from 'crds-ng2-content-block';
import { CustomOptions } from './app.toast.options';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { contentBlockFactory } from './app.contentblock.config';
import { NavigationExtras, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { PreloaderComponent } from './preloader/preloader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule, ToastOptions, ToastsManager } from 'ng2-toastr/ng2-toastr';
import { WindowRefService } from './services/window-ref.service';
import { AssessmentComponent } from './assessment/assessment.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AuthComponent, PreloaderComponent, AssessmentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Angulartics2Module.forRoot([Angulartics2GoogleTagManager, Angulartics2GoogleAnalytics, Angulartics2Segment]),
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    ToastModule.forRoot(),
    ContentBlockModule,
    CookieModule.forRoot()
  ],
  providers: [
    { provide: AuthService, useFactory: authServiceFactory, deps: [] },
    { provide: ToastOptions, useClass: CustomOptions },
    { provide: ContentBlockConfig, useFactory: contentBlockFactory, deps: [] },
    CanActivateViaAuth,
    LoggedInGuard,
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
