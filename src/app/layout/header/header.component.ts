import { Component } from '@angular/core';

@Component({
  selector: 'ddk-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public isMenuCollapsed: boolean = true;
}
