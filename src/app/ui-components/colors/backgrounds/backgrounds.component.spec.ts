/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { ColorBackgroundsComponent } from './backgrounds.component';
import { ContentBlockModule } from '../../../shared/content-block/content-block.module';


describe('Component: ColorBackgroundsComponent', () => {

  let component;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ColorBackgroundsComponent
      ],
      imports: [
        ContentBlockModule,
        HttpModule,
        RouterTestingModule.withRoutes([])
      ]
    });
    this.fixture = TestBed.createComponent(ColorBackgroundsComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });

});
