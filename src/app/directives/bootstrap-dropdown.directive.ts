import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class BootstrapDropdownDirective {

  constructor(private el: ElementRef) {}

  @Input('dropdown') id: string;

  @HostListener('click') onMouseEnter() {
    this.el.nativeElement.classList.toggle("open");
  }
}
