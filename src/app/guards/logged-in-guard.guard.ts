import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { WindowRefService } from '../services/window-ref.service';
import { CookieService, CookieOptions } from 'ngx-cookie';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoggedInGuard implements CanActivate {
  private cookieOptions: CookieOptions = { domain: environment.cookieDomain };
  constructor(
    private authService: AuthService,
    private windowRef: WindowRefService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.authService.isAuthenticated) {
      return true;
    }
    this.cookieService.put('redirectUrl', '/srfp', this.cookieOptions);
    this.windowRef.nativeWindow.location = environment.authRedirectUrl;
    return false;
  }
}
