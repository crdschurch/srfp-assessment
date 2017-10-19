import { TestBed, async } from '@angular/core/testing';
import { Component, ViewContainerRef } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Angulartics2, Angulartics2GoogleAnalytics, Angulartics2GoogleTagManager, Angulartics2Segment} from 'angulartics2';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let mockToastsManager: ToastsManager;
  let mockViewContainerRef: ViewContainerRef;
  let mockAngulartics2GoogleTagManager: Angulartics2GoogleTagManager,
      mockAngulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
      mockAngulartics2Segment: Angulartics2Segment,
      mockAngulartics2: Angulartics2;

  beforeEach(async(() => {
    mockToastsManager = jasmine.createSpyObj<ToastsManager>('toastr', ['setRootViewContainerRef']);
    mockViewContainerRef = jasmine.createSpyObj<ViewContainerRef>('vRef', ['insert']);
    mockAngulartics2GoogleTagManager = jasmine.createSpyObj<Angulartics2GoogleTagManager>('angulartics2GoogleTagManager', ['']);
    mockAngulartics2GoogleAnalytics = jasmine.createSpyObj<Angulartics2GoogleAnalytics>('angulartics2GoogleAnalytics', ['']);
    mockAngulartics2Segment = jasmine.createSpyObj<Angulartics2Segment>('angulartics2Segment', ['']);
    mockAngulartics2 = jasmine.createSpyObj<Angulartics2>('angulartics2', ['']);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: ToastsManager, useValue: mockToastsManager },
        { provide: ViewContainerRef, useValue: mockViewContainerRef },
        { provide: Angulartics2GoogleTagManager, useValue: mockAngulartics2GoogleTagManager },
        { provide: Angulartics2GoogleAnalytics, useValue: mockAngulartics2GoogleAnalytics },
        { provide: Angulartics2Segment, useValue: mockAngulartics2Segment },
        { provide: Angulartics2, useValue: mockAngulartics2 }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
