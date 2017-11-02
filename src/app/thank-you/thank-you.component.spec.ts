import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ThankYouComponent } from './thank-you.component';

class ActivatedRouteStub {
  queryParams = Observable.of({ response_id: '3' });
}

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
        declarations: [ThankYouComponent],
        providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }]
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

  it('should get queryParam', () => {
    expect(component.responseId).toBe('3');
  });
});
