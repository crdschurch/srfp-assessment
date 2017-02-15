/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { SignInComponent } from './sign-in.component';
import { ContentBlockModule } from '../../shared/content-block/content-block.module';


describe('Component: SignInComponent', () => {

  let component;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignInComponent
      ],
      imports: [
        ContentBlockModule,
        HttpModule,
        RouterTestingModule.withRoutes([])
      ]
    });
    this.fixture = TestBed.createComponent(SignInComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });

});
