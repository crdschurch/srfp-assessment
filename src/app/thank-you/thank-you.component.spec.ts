import { Srfp } from '../models/srfp';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ThankYouComponent } from './thank-you.component';
import { ContentService } from 'crds-ng2-content-block';
import { HttpModule } from '@angular/http';
import { ContentBlockConfig, ContentBlockModule, IContentBlockConfig } from 'crds-ng2-content-block';
import { contentBlockFactory } from '../app.contentblock.config';
import { ResultsCardComponent } from './results-card/results-card.component';
import { HttpSessionService } from '../services/http-session.service';
import { CookieModule } from 'ngx-cookie';
import { Response, ResponseOptions, ResponseType } from '@angular/http';

import 'rxjs/add/observable/of';

class ActivatedRouteStub {
  queryParams = Observable.of({ response_id: '3' });
}

export function mockSrfp() {
  return Observable.of(
    new Response(
      new ResponseOptions({
        body: JSON.stringify(new Srfp(1, 2, 3, 4, 5))
      })
    )
  );
}

const mockHttpSessionService = jasmine.createSpyObj<HttpSessionService>('http', ['get']);

describe('ThankYouComponent', () => {
  let mockActivatedRoute;

  let component: ThankYouComponent;
  let fixture: ComponentFixture<ThankYouComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(
    async(() => {
      mockActivatedRoute = new ActivatedRouteStub();

      TestBed.configureTestingModule({
        imports: [ContentBlockModule, HttpModule, CookieModule.forRoot()],
        declarations: [ThankYouComponent, ResultsCardComponent],
        providers: [
          ContentService,
          { provide: HttpSessionService, useValue: mockHttpSessionService },
          { provide: ContentBlockConfig, useFactory: contentBlockFactory, deps: [] },
          { provide: ActivatedRoute, useValue: mockActivatedRoute }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouComponent);
    component = fixture.componentInstance;

    debugElement = fixture.debugElement;
    element = debugElement.nativeElement;

    mockActivatedRoute.testParams = { response_id: '3' };

    fixture.detectChanges();
  });

  xit('should get queryParam', () => {
    (<jasmine.Spy>mockHttpSessionService.get).and.returnValue(mockSrfp());

    console.log('mock' + mockSrfp());

    component.ngOnInit();
    expect(component.responseId).toBe('3');
  });

  xit('get should get called on init', () => {
    (<jasmine.Spy>mockHttpSessionService.get).and.returnValue(Observable.of(new Srfp(1, 2, 3, 4, 5)));

    component.ngOnInit();
    expect(mockHttpSessionService.get).toHaveBeenCalled();
    expect(component.srfp.financialScore).toBe(1);
  });
});
