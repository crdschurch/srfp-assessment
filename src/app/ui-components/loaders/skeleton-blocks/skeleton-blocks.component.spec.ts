import { TestBed } from '@angular/core/testing';
import { SkeletonBlocksComponent } from './skeleton-blocks.component';

describe('Component: LoaderIconsComponent', () => {

  let component;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonBlocksComponent]
    });
    this.fixture = TestBed.createComponent(SkeletonBlocksComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });

});
