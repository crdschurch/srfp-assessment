import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeTitle = 'Hello World!';
  apiEndpoint = environment.apiEndpoint;
  constructor() { }

  ngOnInit() {
  }

}
