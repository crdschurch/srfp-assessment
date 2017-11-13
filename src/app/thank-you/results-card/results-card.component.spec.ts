import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultsCardComponent } from './results-card.component';
import { ContentService } from 'crds-ng2-content-block';
import { HttpModule } from '@angular/http';
import { ContentBlockConfig, ContentBlockModule, IContentBlockConfig } from 'crds-ng2-content-block';
import { contentBlockFactory } from '../../app.contentblock.config';

describe('ResultsCardComponent', () => {
  let component: ResultsCardComponent;
  let fixture: ComponentFixture<ResultsCardComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ContentBlockModule, HttpModule],
        declarations: [ResultsCardComponent],
        providers: [ContentService, { provide: ContentBlockConfig, useFactory: contentBlockFactory, deps: [] }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be a seeker', () => {
    component.name = 'Financial';
    component.score = 100;
    component.ngOnInit();
    expect(component.classification).toBe('Seeker');
  });

  it('should generate the content block title', () => {
    component.name = 'Spiritual';
    component.score = 300;
    component.ngOnInit();
    expect(component.contentBlockTitle).toBe('srfpOutputProducerSpiritual');
  });
});
