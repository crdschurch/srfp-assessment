import { TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, Http  } from '@angular/http';
import { ElementRef, Renderer } from '@angular/core';
import { TablesComponent } from './tables.component';
import { TablesJumbotronComponent } from './jumbotron/jumbotron.component';
import { ContentBlockComponent } from '../../shared/content-block/content-block.component';
import { ContentService } from '../../shared/content-block/content.service';

describe('Component: Typesetting', () => {

  let component;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablesComponent, TablesJumbotronComponent, ContentBlockComponent],
      imports: [],
      providers: [
        Renderer,
        ContentService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
    this.fixture = TestBed.createComponent(TablesComponent);
    this.component = this.fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(this.component).toBeTruthy();
  });
});
