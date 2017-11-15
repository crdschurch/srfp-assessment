import { AssessmentComponent } from "./assessment.component";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { environment } from "environments/environment";
import { MockComponent } from "ng2-mock-component";

describe("AssessmentComponent", () => {
  let component: AssessmentComponent;
  let fixture: ComponentFixture<AssessmentComponent>;
  let mockDomSanitizer: DomSanitizer;

  beforeEach(
    async(() => {
      mockDomSanitizer = jasmine.createSpyObj<DomSanitizer>("sanitizer", [
        "bypassSecurityTrustResourceUrl"
      ]);
      TestBed.configureTestingModule({
        declarations: [
          AssessmentComponent,
          MockComponent({ selector: "iframe", inputs: ["src"] })
        ],
        providers: [
          {
            provide: DomSanitizer,
            useValue: mockDomSanitizer
          }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should init and construct url", () => {
    const url: SafeResourceUrl = `https://embed${environment.crdsEnv}.crossroads.net/fred/srfpassessment?redirecturl=/srfp/thanks`;
    (<jasmine.Spy>mockDomSanitizer.bypassSecurityTrustResourceUrl).and.returnValue(
      url
    );
    component.ngOnInit();
    expect(
      mockDomSanitizer.bypassSecurityTrustResourceUrl
    ).toHaveBeenCalledWith(url);
    expect(component.url).toBe(url);
  });
});
