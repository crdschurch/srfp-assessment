import { Component } from '@angular/core';
import { Button } from './button';

const BUTTONS: Button[] = [
  { id: 'button1-1', label: 'Option 1'},
  { id: 'button1-2', label: 'Option 2'},
  { id: 'button1-3', label: 'Option 3'},
  { id: 'button1-4', label: 'Option  4'}
]

const BUTTONS2: Button[] = [
  { id: 'button2-1', label: 'Option 1'},
  { id: 'button2-2', label: 'Option 2'},
  { id: 'button2-3', label: 'Option 3'},
  { id: 'button2-4', label: 'Option 4'}
]

const BUTTONS3: Button[] = [
  { id: 'button3-1', label: 'Option 1'},
  { id: 'button3-2', label: 'Option 2'},
  { id: 'button3-3', label: 'Option 3'},
  { id: 'button3-4', label: 'Option 4'}
]

const BUTTONS4: Button[] = [
  { id: 'button4-1', label: 'Option 1'},
  { id: 'button4-2', label: 'Option 2'},
  { id: 'button4-3', label: 'Option 3'},
  { id: 'button4-4', label: 'Option 4'}
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
  selectedButtonId: string;

  // isActive: boolean = true;

  // toggle() {
  //   this.isActive = !this.isActive;
  // }

  isActive(button: Button) {
    console.log(`Button: ${button.id}`, this.selectedButtonId === button.id);
    return this.selectedButtonId === button.id;
  }

  onSelect(button: Button): void {
    this.selectedButtonId = button.id;
    console.log('onSelect', this.selectedButtonId);
  }

  public selectButton() {
    this.customInputSelected = false;
  }

  public selectCustom() {
    this.customInputSelected = true;
  }
}