import { AuthService } from './auth.service';
import ReactiveAuth from 'crds-reactive-auth';
import {Observable} from 'rxjs/Observable';

describe('AuthService', () => {

  let reactiveAuth: ReactiveAuth;
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
    spyOn(authService.reactiveAuth, 'subscribe');
  });


  it("should subscribe to the reactive auth event and return an obs that watchs events", () => {
    // get the observable...
    const obs = authService.authObs;
    obs.subscribe( (evt) => { });
    expect(authService.reactiveAuth.subscribe).toHaveBeenCalled();
  });
});
