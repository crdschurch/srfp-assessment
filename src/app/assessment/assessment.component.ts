import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  public url: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://embed${environment.crdsEnv}.crossroads.net/fred/srfpassessment?redirecturl=/srfp/thanks`
    );
  }
}
