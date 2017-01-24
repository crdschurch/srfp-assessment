import { Component } from '@angular/core';
import { Button } from './button';

const BUTTONS: Button[] = [
  { label: 'Option 1'},
  { label: 'Option 2'},
  { label: 'Option 3'},
  { label: 'Option 4'}
]

const BUTTONS2: Button[] = [
  { label: 'Option 1'},
  { label: 'Option 2'},
  { label: 'Option 3'},
  { label: 'Option 4'}
]

const BUTTONS3: Button[] = [
  { label: 'Option 1'},
  { label: 'Option 2'},
  { label: 'Option 3'},
  { label: 'Option 4'}
]

const BUTTONS4: Button[] = [
  { label: 'Option 1'},
  { label: 'Option 2'},
  { label: 'Option 3'},
  { label: 'Option 4'}
]

@Component({
  templateUrl: './groups.component.html'
})

export class ButtonGroupsComponent {
  public customInputSelected: boolean = false;
  buttons = BUTTONS;
  buttons2 = BUTTONS2;
  buttons3 = BUTTONS3;
  buttons4 = BUTTONS4;
  selectedButton: Button;

  // isActive: boolean = true;

  // toggle() {
  //   this.isActive = !this.isActive;
  // }

  onSelect(button: Button): void {
    this.selectedButton = button;
  }

  public selectButton() {
    this.customInputSelected = false;
  }

  public selectCustom() {
    this.customInputSelected = true;
  }
}