import { AuthService } from '../services/auth/auth.service';
import { ReactiveAuth } from 'crds-reactive-auth';
import { Observable } from 'rxjs/Observable';
import { TestBed, async, inject } from '@angular/core/testing';
import { LoggedInGuard } from './logged-in-guard.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { WindowRefService } from '../services/window-ref.service';
import { CookieService, CookieOptions } from 'ngx-cookie';
import { Router } from '@angular/router';

const mockCookieService = jasmine.createSpyObj<CookieService>('cookieService', ['get', 'put']);
const mockRouter = jasmine.createSpyObj<Router>('router', ['navigate']);
const currentRoute = new ActivatedRouteSnapshot();
class FakeWindow {
  get nativeWindow(): any {
    return {
      location: '/some/url'
    };
  }
}

class StubAuthService {
  isAuthenticated = true;
  watch = () =>
    Observable.create(observer => {
      observer.next({
        detail: {
          message: 'Auth Cookie Updated',
          oldValue: 'oldValue',
          currentValue: 'newValue'
        }
      });
    });
}

class StubNonAuthService {
  isAuthenticated = false;
  watch = () =>
    Observable.create(observer => {
      observer.next({
        detail: {
          message: 'Auth Cookie Expired',
          oldValue: 'oldValue',
          currentValue: ''
        }
      });
    });
}

describe('Logged In Router Guard', () => {
  describe('Cookie updated', () => {
    beforeEach(
      async(() => {
        TestBed.configureTestingModule({
          providers: [
            { provide: AuthService, useClass: StubAuthService },
            { provide: WindowRefService, useClass: FakeWindow },
            { provide: CookieService, useValue: mockCookieService },
            { provide: Router, useValue: mockRouter },
            LoggedInGuard
          ]
        });
      })
    );

    it(
      'should be authenticated',
      inject([LoggedInGuard, AuthService], (canActivate: LoggedInGuard, stubAuthService: AuthService) => {
        const activate = canActivate.canActivate(currentRoute);
        expect(activate).toBe(true);
      })
    );
  });

  describe('Cookie Expired', () => {
    beforeEach(
      async(() => {
        TestBed.configureTestingModule({
          providers: [
            { provide: AuthService, useClass: StubNonAuthService },
            { provide: WindowRefService, useClass: FakeWindow },
            { provide: CookieService, useValue: mockCookieService },
            { provide: Router, useValue: mockRouter },
            LoggedInGuard
          ]
        });
      })
    );

    it(
      'should not be authenticated',
      inject([LoggedInGuard, AuthService], (canActivate: LoggedInGuard, stubAuthService: AuthService) => {
        const activate = canActivate.canActivate(currentRoute);
        expect(activate).toBe(false);
      })
    );
  });
});
