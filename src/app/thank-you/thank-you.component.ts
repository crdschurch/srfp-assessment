import { Srfp } from '../models/srfp';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Person } from '../models/person';
import { Http, Response } from '@angular/http';
import { HttpSessionService } from '../services/http-session.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  public responseId: string;
  public srfp: Srfp = new Srfp(0, 0, 0, 0, 0);
  public demo: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpSessionService) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.responseId = params['response_id'];

      if (params['demo'] !== undefined) {
        this.demo = Number(params['demo']);
      }
      this.srfp.spiritualScore = params['spiritual'];
      this.srfp.physicalScore = params['physical'];
      this.srfp.intellectualScore = params['intellectual'];
      this.srfp.financialScore = params['financial'];
      this.srfp.relationalScore = params['relational'];
    });
    this.getResults();
  }

  private getResults() {
    if (this.demo === 0) {
      return this.http.get('/Person/srfp').subscribe(result => {
        console.log(result);
        this.srfp = result.json();
        console.log('--' + this.srfp);
      });
    }
  }
}
