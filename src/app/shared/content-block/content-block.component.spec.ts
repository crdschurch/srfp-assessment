/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ContentBlockComponent } from './content-block.component';
import { ContentService } from './content.service';

describe('Directive: ContentBlock', () => {

  let component;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContentService
      ]
    });
    this.fixture = TestBed.createComponent(ContentBlockComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });

});
