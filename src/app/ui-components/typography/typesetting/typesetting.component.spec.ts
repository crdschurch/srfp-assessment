import { TestBed } from '@angular/core/testing';
import { ElementRef, Renderer } from '@angular/core';
import { TypesettingComponent } from './typesetting.component';

describe('Component: Typesetting', () => {

  let component;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypesettingComponent],
      providers: [Renderer]
    });
    this.fixture = TestBed.createComponent(TypesettingComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });
});
