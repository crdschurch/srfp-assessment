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
    let examples = document.getElementsByClassName('crds-example');
    for(var i = 0; i < examples.length; i++) {
      if(!examples[i].getAttribute('data-processed')) {
        this.buildExample(examples[i]);
      }
    }

    let preformatted = document.getElementsByClassName('language-markup');
    for(var i = 0; i < preformatted.length; i++) {
      if(!preformatted[i].getAttribute('data-processed')) {
        this.addSyntaxHighlighting(preformatted[i]);
      }
    }
  }

  private buildExample(el) {
    el.setAttribute('data-processed', 'true');

    var html = el.innerHTML.replace(/^\n+|\n+$/g, '');
    var node = document.createTextNode(html);
    var pre = document.createElement('pre');
        pre.classList.add('language-markup');
        pre.appendChild(node);
    var figure = document.createElement('figure');
        figure.classList.add('highlight');
        figure.appendChild(pre);
    this.insertAfter(figure, el);
  }

  private insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  private addSyntaxHighlighting(el) {
    el.setAttribute('data-processed', 'true');
    Prism.highlightElement(el);
  }
}
