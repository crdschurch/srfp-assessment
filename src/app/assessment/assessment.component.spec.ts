import { AssessmentComponent } from './assessment.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'environments/environment';

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
    spyOn(component.sanitizer, 'bypassSecurityTrustResourceUrl').and.returnValue(
      `https://embed${environment.crdsEnv}.crossroads.net/fred/100questionsforjoe`
    );
    component.ngOnInit();
    expect(component.sanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith(
      `https://embed${environment.crdsEnv}.crossroads.net/fred/100questionsforjoe`
    );
    expect(component.url).toBe(`https://embed${environment.crdsEnv}.crossroads.net/fred/100questionsforjoe`);
  });
});
