import { Srfp } from '../models/srfp';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Person } from '../models/person';
import { Http, Response } from '@angular/http';
import { HttpSessionService } from '../services/http-session.service';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  public responseId: string;
  public jsonstuff = '123';
  public theperson: Person = new Person(1, 'phil', 'pl', new Srfp(1, 2, 3, 4, 5));
  public srfp: Srfp = new Srfp(1, 2, 3, 4, 5);

  constructor(private activatedRoute: ActivatedRoute, private http: HttpSessionService) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.responseId = params['response_id'];
    });
    this.getResults();
    this.getResults2();
  }

  private getResults() {
    const url = '/Person/1';

    this.http.get(url).subscribe(result => (this.theperson = result.json()));
  }

  private getResults2() {
    const url = '/Person/srfp';
    return this.http.get(url).subscribe(result => (this.srfp = result.json()));
  }
}
