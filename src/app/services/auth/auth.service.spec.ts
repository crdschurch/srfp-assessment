import { AuthService } from './auth.service';
import ReactiveAuth from 'crds-reactive-auth';
import {Observable} from 'rxjs/Observable';

describe('AuthService', () => {

  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
    spyOn(authService, 'watch').and.returnValue(
      Observable.create( obs => obs.next({
        detail: {
          message: 'Auth Cookie Updated',
          oldValue: 'oldValue',
          currentValue: 'newValue'
        }})
     )
    );
  });


  it('should return  an observable when watched is called', (done) => {
    // get the observable...
    const obs = authService.watch();
    obs.subscribe( (evt) => {
      expect(evt.detail.currentValue).toBe('newValue');
      done();
    });
  });
});
