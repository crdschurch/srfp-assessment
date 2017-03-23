import ReactiveAuth from 'crds-reactive-auth';
import {Observable} from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  reactiveAuth: ReactiveAuth;
  authObs: Observable<any>;
  sessionId: string;

  constructor() {
    this.reactiveAuth = new ReactiveAuth('localsessionId');
    this.watch();
  }

  watch(): void{
    this.authObs = Observable.create( observer => {

      const onUpdate = (evt) => {
        this.sessionId = evt.detail.currentValue;
        observer.next(evt);
      }

      const onExpired = (evt) => {
        this.sessionId = null;
        observer.next(evt);
      }

      this.reactiveAuth.subscribe(3000, onUpdate, onExpired);
    });
  }
}
