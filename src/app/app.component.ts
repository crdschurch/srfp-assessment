import { Component, ViewEncapsulation, AfterViewChecked, ElementRef, Renderer } from '@angular/core';

let Prism = require('prismjs');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles/application.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewChecked {

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    this.renderer.listen(this.elementRef.nativeElement, 'click', (event) => {
      if (event.target.closest('.crds-example')) {
        if (event.target.nodeName === 'A' || event.target.classList.contains('btn')) {
          return false;
        }
      }
    });
  }

  ngAfterViewChecked() {
    let examples = document.getElementsByClassName('crds-example');
    for (let i = 0; i < examples.length; i++) {
      if (!examples[i].getAttribute('data-processed')) {
        this.buildExample(examples[i]);
      }
    }

    let preformatted = document.querySelectorAll('.language-markup, .language-javascript');

    for (let j = 0; j < preformatted.length; j++) {
      if (!preformatted[j].getAttribute('data-processed')) {
        this.addSyntaxHighlighting(preformatted[j]);
      }
    }
  }

  private addSyntaxHighlighting(el) {
    el.setAttribute('data-processed', 'true');
    Prism.highlightElement(el);
  }

  private buildExample(el) {
    if (el.getAttribute('data-processed')) {
      return;
    }
    el.setAttribute('data-processed', 'true');

    let html = el.innerHTML.replace(/^\n+|\n+$/g, '');
    let node = document.createTextNode(html);
    let pre = document.createElement('pre');
        pre.classList.add('language-markup');
        pre.appendChild(node);
    let figure = document.createElement('figure');
        figure.classList.add('highlight');
        figure.appendChild(pre);
    this.insertAfter(figure, el);
    Prism.highlightElement(pre);
  }

  private insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
}
