import { TestBed } from '@angular/core/testing';
import { ColorBackgroundsComponent } from './backgrounds.component';

describe('Component: ColorBackgroundsComponent', () => {

  let component;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorBackgroundsComponent]
    });
    this.fixture = TestBed.createComponent(ColorBackgroundsComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });

});
