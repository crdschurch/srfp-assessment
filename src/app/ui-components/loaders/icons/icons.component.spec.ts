import { TestBed } from '@angular/core/testing';
import { LoaderIconsComponent } from './icons.component';

describe('Component: LoaderIconsComponent', () => {

  let component;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderIconsComponent]
    });
    this.fixture = TestBed.createComponent(LoaderIconsComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });

});
