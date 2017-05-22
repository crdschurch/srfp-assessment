import { TestBed, async } from '@angular/core/testing';
import { Component, ViewContainerRef } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let mockToastsManager: ToastsManager;
  let mockViewContainerRef: ViewContainerRef;

  beforeEach(async(() => {
    mockToastsManager = jasmine.createSpyObj<ToastsManager>('toastr', ['setRootViewContainerRef']);
    mockViewContainerRef = jasmine.createSpyObj<ViewContainerRef>('vRef', ['insert']);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: ToastsManager, useValue: mockToastsManager },
        { provide: ViewContainerRef, useValue: mockViewContainerRef }
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
