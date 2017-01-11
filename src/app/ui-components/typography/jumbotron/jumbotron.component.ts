import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ddk-typography-jumbotron',
  templateUrl: './jumbotron.component.html'
})
export class JumbotronComponent {

  constructor(router: Router) {
    router.events.subscribe( event => {
      console.log(event.url);
    })
  }

}