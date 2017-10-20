import { AssessmentComponent } from './assessment.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

describe('AssessmentComponent', () => {
  let component: AssessmentComponent;
  let fixture: ComponentFixture<AssessmentComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AssessmentComponent],
        providers: [DomSanitizer]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init and construct url', () => {
    component.ngOnInit();
    console.log(component.url);
    expect(component.url).toBe('https://embedint.crossroads.net/fred/100questionsforjoe');
  });
});
