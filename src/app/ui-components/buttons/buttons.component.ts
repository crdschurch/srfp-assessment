import { Component, ElementRef, Renderer } from '@angular/core';

@Component({
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {
  constructor(elementRef: ElementRef, renderer: Renderer) {
    renderer.listen(elementRef.nativeElement, 'click', (event) => {
      if(event.target.parentNode.classList.contains('crds-example')) {
        return false;
      }
    })
  }
}
