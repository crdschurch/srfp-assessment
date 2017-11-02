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

  constructor(private activatedRoute: ActivatedRoute, private http: HttpSessionService) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.responseId = params['response_id'];
    });

    console.log(this.http.get('123'));

    this.getResults();
  }

  private getResults() {
    return this.http.get('/Person/srfp').subscribe(result => this.ss(result.json()));
  }

  private ss(newsrfp: Srfp) {
    this.srfp = newsrfp;
  }
}
