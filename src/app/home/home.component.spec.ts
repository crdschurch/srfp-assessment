import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, XHRBackend } from '@angular/http';
import { ContentBlockModule } from 'crds-ng2-content-block';
import { environment } from '../../environments/environment';
import { HomeComponent } from './home.component';
import { MockBackend } from '@angular/http/testing';
import { MockComponent } from 'ng2-mock-component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { ToastsManager } from 'ng2-toastr';

describe('HomeComponent', () => {
  let mockToastsManager: ToastsManager;

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(
    async(() => {
      mockToastsManager = jasmine.createSpyObj<ToastsManager>('toastr', ['error', 'success']);

      TestBed.configureTestingModule({
        declarations: [
          MockComponent({ selector: 'crds-content-block', inputs: ['id'] }),
          HomeComponent,
          PreloaderComponent
        ],
        imports: [HttpModule],
        providers: [
          { provide: XHRBackend, useClass: MockBackend },
          { provide: ToastsManager, useValue: mockToastsManager }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should say hello', () => {
    expect(component.homeTitle).toBe('Hello World!');
  });
});
