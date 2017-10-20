import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  public url: string;
  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.url = `https://embed${environment.crdsEnv}.crossroads.net/fred/100questionsforjoe`;
  }
}
