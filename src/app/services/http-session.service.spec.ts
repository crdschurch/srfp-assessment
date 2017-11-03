import { TestBed, inject } from '@angular/core/testing';

import { HttpSessionService } from './http-session.service';
import {
  HttpModule,
  Http,
  BaseRequestOptions,
  RequestOptions,
  XHRBackend,
  Response,
  ResponseOptions,
  Headers
} from '@angular/http';
import { CookieService, CookieOptions } from 'ngx-cookie';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';

let mockCookieService: CookieService;
let mockHttpService: Http;

export const fakeAuthResponse = (authToken, refreshToken) => {
  const meta = { sessionId: authToken, refreshToken: refreshToken };
  const headers = new Headers(meta);
  const opts = new ResponseOptions({ body: {}, status: 200 });
  const res = new Response(opts);
  res.headers = headers;
  return res;
};

describe('HttpSessionService', () => {
  mockCookieService = jasmine.createSpyObj<CookieService>('cookieService', ['get', 'put']);
  mockHttpService = jasmine.createSpyObj<Http>('http', ['get', 'put', 'post']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: CookieService, useValue: mockCookieService },
        { provide: Http, useValue: mockHttpService },
        HttpSessionService
      ]
    });
  });

  describe('Cookie Exists', () => {
    const refreshTokenString: string = 'refresh9090';
    const cookieString: string = '1234567890';
    const newSessionId: string = '0987654321';
    const newRefreshToken: string = 'refresh999';
    beforeEach(() => {
      (<jasmine.Spy>mockCookieService.get).and.callFake(cookieKey => {
        if (cookieKey === `${environment.crdsEnv}sessionId`) {
          return cookieString;
        } else if (cookieKey === `${environment.crdsEnv}refreshToken`) {
          return refreshTokenString;
        }
        return 'dontcare';
      });
    });

    it(
      'should set the authorization headers when making a get request',
      inject([HttpSessionService, CookieService, Http, RequestOptions], (fixture, cookies, http, requestOptions) => {
        (<jasmine.Spy>http.get).and.callFake((url, options) => {
          expect(options.headers.get('Authorization')).toEqual(cookieString);
          return Observable.of(fakeAuthResponse(newSessionId, newRefreshToken));
        });
        fixture.get('/any/url');
        expect(http.get).toHaveBeenCalled();
        expect(cookies.get).toHaveBeenCalledWith(`${environment.crdsEnv}sessionId`);
      })
    );

    it(
      'should set the refresh token headers when making a get request',
      inject([HttpSessionService, CookieService, Http, RequestOptions], (fixture, cookies, http, requestOptions) => {
        (<jasmine.Spy>http.get).and.callFake((url, options) => {
          expect(options.headers.get('RefreshToken')).toEqual(refreshTokenString);
          return Observable.of(fakeAuthResponse(newSessionId, newRefreshToken));
        });
        fixture.get('/any/url');
        expect(http.get).toHaveBeenCalled();
        expect(cookies.get).toHaveBeenCalledWith(`${environment.crdsEnv}sessionId`);
      })
    );

    it(
      'should set the authorization headers when making a post request',
      inject([HttpSessionService, CookieService, Http, RequestOptions], (fixture, cookies, http, requestOptions) => {
        const dataToSave = {};
        (<jasmine.Spy>http.post).and.callFake((url, data, options) => {
          expect(options.headers.get('Authorization')).toEqual(cookieString);
          return Observable.of(fakeAuthResponse(newSessionId, newRefreshToken));
        });
        fixture.post('/any/url', dataToSave);
        expect(http.post).toHaveBeenCalled();
        expect(cookies.get).toHaveBeenCalledWith(`${environment.crdsEnv}sessionId`);
      })
    );

    it(
      'should set the refresh token headers when making a post request',
      inject([HttpSessionService, CookieService, Http, RequestOptions], (fixture, cookies, http, requestOptions) => {
        const dataToSave = {};
        (<jasmine.Spy>http.post).and.callFake((url, data, options) => {
          expect(options.headers.get('RefreshToken')).toEqual(refreshTokenString);
          return Observable.of(fakeAuthResponse(newSessionId, newRefreshToken));
        });
        fixture.post('/any/url', dataToSave);
        expect(http.post).toHaveBeenCalled();
        expect(cookies.get).toHaveBeenCalledWith(`${environment.crdsEnv}sessionId`);
      })
    );

    it(
      'should update the refresh token cookie when making a get request',
      inject([HttpSessionService, CookieService, Http, RequestOptions], (fixture, cookies, http, requestOptions) => {
        (<jasmine.Spy>http.get).and.callFake((url, options) => {
          return Observable.of(fakeAuthResponse(newSessionId, newRefreshToken));
        });
        fixture.get('/any/url').subscribe();
        expect(cookies.put).toHaveBeenCalledWith(
          `${environment.crdsEnv}refreshToken`,
          newRefreshToken,
          jasmine.any(Object)
        );
      })
    );

    it(
      'should update the refresh token cookie when making a post request',
      inject([HttpSessionService, CookieService, Http, RequestOptions], (fixture, cookies, http, requestOptions) => {
        (<jasmine.Spy>http.post).and.callFake((url, data, options) => {
          return Observable.of(fakeAuthResponse(newSessionId, newRefreshToken));
        });
        fixture.post('/any/url', {}).subscribe();
        expect(cookies.put).toHaveBeenCalledWith(
          `${environment.crdsEnv}refreshToken`,
          newRefreshToken,
          jasmine.any(Object)
        );
      })
    );

    it(
      'should update the auth token cookie when making a get request',
      inject([HttpSessionService, CookieService, Http, RequestOptions], (fixture, cookies, http, requestOptions) => {
        (<jasmine.Spy>http.get).and.callFake((url, options) => {
          return Observable.of(fakeAuthResponse(newSessionId, newRefreshToken));
        });
        fixture.get('/any/url').subscribe();
        expect(cookies.put).toHaveBeenCalledWith(`${environment.crdsEnv}sessionId`, newSessionId, jasmine.any(Object));
      })
    );

    it(
      'should update the auth token cookie when making a post request',
      inject([HttpSessionService, CookieService, Http, RequestOptions], (fixture, cookies, http, requestOptions) => {
        (<jasmine.Spy>http.post).and.callFake((url, data, options) => {
          return Observable.of(fakeAuthResponse(newSessionId, newRefreshToken));
        });
        fixture.post('/any/url', {}).subscribe();
        expect(cookies.put).toHaveBeenCalledWith(`${environment.crdsEnv}sessionId`, newSessionId, jasmine.any(Object));
      })
    );
  });

  describe('Cookie Does Not Exist', () => {
    const cookieString: string = null;
    const refreshTokenString: string = null;
    beforeEach(() => {
      (<jasmine.Spy>mockCookieService.get).and.callFake(cookieKey => {
        if (cookieKey === `${environment.crdsEnv}sessionId`) {
          return cookieString;
        } else if (cookieKey === `${environment.crdsEnv}refreshToken`) {
          return refreshTokenString;
        }
        return 'dontcare';
      });
    });

    it(
      'should not set the authorization headers when making a get request',
      inject([HttpSessionService, CookieService, Http, RequestOptions], (fixture, cookies, http, requestOptions) => {
        (<jasmine.Spy>http.get).and.callFake((url, options) => {
          expect(options.headers.get('Authorization')).toBeNull();
          return Observable.of({});
        });
        fixture.get('/any/url');
        expect(http.get).toHaveBeenCalled();
        expect(cookies.get).toHaveBeenCalledWith(`${environment.crdsEnv}sessionId`);
      })
    );

    it(
      'should not set the authorization headers when making a post request',
      inject([HttpSessionService, CookieService, Http, RequestOptions], (fixture, cookies, http, requestOptions) => {
        (<jasmine.Spy>http.post).and.callFake((url, data, options) => {
          expect(options.headers.get('Authorization')).toBeNull();
          return Observable.of({});
        });
        fixture.post('/any/url', {});
        expect(http.get).toHaveBeenCalled();
        expect(cookies.get).toHaveBeenCalledWith(`${environment.crdsEnv}sessionId`);
      })
    );

    it(
      'should not set the refreshtoken headers when making a get request',
      inject([HttpSessionService, CookieService, Http, RequestOptions], (fixture, cookies, http, requestOptions) => {
        (<jasmine.Spy>http.get).and.callFake((url, options) => {
          expect(options.headers.get('RefreshToken')).toBeNull();
          return Observable.of({});
        });
        fixture.get('/any/url');
        expect(http.get).toHaveBeenCalled();
        expect(cookies.get).toHaveBeenCalledWith(`${environment.crdsEnv}refreshToken`);
      })
    );

    it(
      'should not set the refreshtoken headers when making a post request',
      inject([HttpSessionService, CookieService, Http, RequestOptions], (fixture, cookies, http, requestOptions) => {
        (<jasmine.Spy>http.post).and.callFake((url, data, options) => {
          expect(options.headers.get('RefreshToken')).toBeNull();
          return Observable.of({});
        });
        fixture.get('/any/url', {});
        expect(http.get).toHaveBeenCalled();
        expect(cookies.get).toHaveBeenCalledWith(`${environment.crdsEnv}refreshToken`);
      })
    );
  });
});
