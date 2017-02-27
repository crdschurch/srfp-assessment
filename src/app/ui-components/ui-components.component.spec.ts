/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UiComponentsComponent } from './ui-components.component';

describe('Component: UiComponents', () => {

  let component;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UiComponentsComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    });
    this.fixture = TestBed.createComponent(UiComponentsComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });

});
