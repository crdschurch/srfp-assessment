import { Component, ViewEncapsulation, AfterViewChecked } from '@angular/core';

var Prism = require('prismjs');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles/application.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewChecked {
  title = 'app works!';

  ngAfterViewChecked() {
    var els = document.getElementsByClassName('language-markup');
    for(var i = 0; i < els.length; i++) {
      Prism.highlightElement(els[i]);
    }
  }
}
