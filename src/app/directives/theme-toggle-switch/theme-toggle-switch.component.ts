import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'theme-toggle-switch',
  templateUrl: './theme-toggle-switch.component.html',
  styleUrls: ['./theme-toggle-switch.component.scss']
})
export class ThemeToggleSwitch {

  private body;
  private state: String = 'off';
  private selector: String = 'dark-theme';

  @Output() stateChange = new EventEmitter<any>();

  constructor() {
    this.body = document.getElementsByTagName('body')[0];
    console.log(this.selector);
  }

  onSwitch() {
    this.state = this.state == 'on' ? 'off' : 'on';
    this.stateChange.emit({
      value: this.state
    });
    this.toggleClass();
  }

  toggleClass() {
    if(this.state == 'on') {
      this.body.classList.add(this.selector)
    } else {
      this.body.classList.remove(this.selector)
    }
  }
}
