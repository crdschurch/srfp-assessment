/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { UiComponentsComponent } from './ui-components.component';
import { ContentService } from '../services/content.service';

describe('Component: UiComponents', () => {

  let component;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContentService
      ]
    });
    this.fixture = TestBed.createComponent(UiComponentsComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });

});
