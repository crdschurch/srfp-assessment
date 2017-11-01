import { Injectable } from '@angular/core';
import { CookieService, CookieOptions } from 'ngx-cookie';
import { Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';
import * as moment from 'moment';

@Injectable()
export class HttpSessionService {
  private baseUrl: string = `${environment.apiEndpoint}api`;
  private cookieOptions: CookieOptions = { domain: environment.cookieDomain };
  private readonly authToken: string = `${environment.crdsEnv}sessionId`;
  private readonly refreshToken: string = `${environment.crdsEnv}refreshToken`;

  constructor(private http: Http, private cookieService: CookieService, private options: RequestOptions) {}

  get(url): Observable<Response> {
    const t1 = this.cookieService.get(this.authToken);
    const t2 = this.cookieService.get(this.refreshToken);
    this.options.headers.set('Authorization', this.cookieService.get(this.authToken));
    this.options.headers.set('RefreshToken', this.cookieService.get(this.refreshToken));
    return this.http.get(`${this.baseUrl}${url}`, this.options).do(this.extractTokens);
  }

  post(url, data): Observable<Response> {
    this.options.headers.set('Authorization', this.cookieService.get(this.authToken));
    this.options.headers.set('RefreshToken', this.cookieService.get(this.refreshToken));
    return this.http.post(`${this.baseUrl}${url}`, data, this.options).map(this.extractTokens);
  }

  private extractTokens = (res: Response): Response => {
    this.updateCookieTimeout();
    if (res.headers != null && res.headers.get('sessionid')) {
      this.setToken(this.authToken, res.headers.get('sessionid'));
    }

    if (res.headers != null && res.headers.get('refreshToken')) {
      this.setToken(this.refreshToken, res.headers.get('refreshToken'));
    }
    return res;
  };

  private setToken(tokenName: string, value: string) {
    this.cookieService.put(tokenName, value, this.cookieOptions);
  }

  private updateCookieTimeout() {
    const expiration = moment()
      .add(1800000, 'milliseconds')
      .toDate();
    this.cookieOptions.expires = expiration;
    this.setToken(this.refreshToken, this.cookieService.get(this.refreshToken));
    this.setToken(this.authToken, this.cookieService.get(this.authToken));
  }
}
