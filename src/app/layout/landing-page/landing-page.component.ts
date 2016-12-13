import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ddk-landing-page',
  templateUrl: './landing-page.component.html'
})

export class LandingPageComponent implements OnInit {
  landing_page = {
    'name': 'UI Components',
    'info': 'Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
  }

  constructor() { }

  ngOnInit() {
  }

}
