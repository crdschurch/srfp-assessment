import { Component, ElementRef, Renderer } from '@angular/core';

@Component({
  templateUrl: './typesetting.component.html'
})
export class TypesettingComponent {
  constructor(elementRef: ElementRef, renderer: Renderer) {
    renderer.listen(elementRef.nativeElement, 'click', (event) => {
      if (event.target.closest('.crds-example')) {
        return false;
      }
    });
  }
}
