import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { BootstrapDropdownService } from './bootstrap-dropdown.service';

@Directive({
  selector: '[dropdown]'
})
export class BootstrapDropdownDirective {

  private klass: String = 'open';

  @Input() dropdown: String;

  @HostListener('click') onMouseEnter() {
    let id = this.el.nativeElement.getAttribute('dropdown');
    this.dropdownService.activateMenu(id);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.el.nativeElement.classList.remove(this.klass);
    }
  }

  constructor(private el: ElementRef, private dropdownService: BootstrapDropdownService) {
    dropdownService.menuActivated$.subscribe(
      active => this.toggleVisibility(active)
    );
  }

  toggleVisibility(active) {
    let isOpen = this.el.nativeElement.classList.contains(this.klass);
    this.el.nativeElement.classList.remove(this.klass);
    if (!isOpen && active === this.dropdown) {
      this.el.nativeElement.classList.add(this.klass);
    }
  }

}
