import { Component } from '@angular/core';

const VERT_BUTTONS = [
  { label: 'Option 1', amount: '100' },
  { label: 'Option 2', amount: '200' },
  { label: 'Option 3', amount: '300' }
]

@Component({
  templateUrl: './groups.component.html'
})
export class FormGroupsComponent {
  vert_buttons = VERT_BUTTONS;
  selectedButton;
  public customInputSelected: boolean = false;

  onSelect(button): void {
    this.selectedButton = button;
    this.customInputSelected = false;
  }

  public selectButton() {
    this.customInputSelected = false;
  }

  public selectedCustom() {
    this.customInputSelected = true;
  }
}