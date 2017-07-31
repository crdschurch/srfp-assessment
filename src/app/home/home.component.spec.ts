import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ContentBlockModule } from 'crds-ng2-content-block';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { environment } from '../../environments/environment';

import { PreloaderComponent } from '../preloader/preloader.component';

describe('HomeComponent', () => {
  let mockToastsManager: ToastsManager;

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    mockToastsManager = jasmine.createSpyObj<ToastsManager>('toastr', ['error', 'success']);

    TestBed.configureTestingModule({
      declarations: [ HomeComponent, PreloaderComponent ],
      imports: [
        ContentBlockModule.forRoot({ categories: Array('main', 'common'), endpoint: environment.crdsEndpoint }),
        HttpModule
      ],
      providers: [
        { provide: XHRBackend, useClass: MockBackend },
        { provide: ToastsManager, useValue: mockToastsManager }
      ]
    })
    .compileComponents();
  }));

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
