import { Component, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'ddk-tables',
  templateUrl: './tables.component.html'
})
export class TablesComponent {
  constructor(elementRef: ElementRef, renderer: Renderer) {
    renderer.listen(elementRef.nativeElement, 'click', (event) => {
      if (event.target.closest('.crds-example')) {
        return false;
      }
    });
  }
}
