import { Component } from '@angular/core';

const BUTTONS = [
  { label: 'Option 1' },
  { label: 'Option 2' },
  { label: 'Option 3' },
  { label: 'Option 4' }
]

const NO_OUTLINE_BUTTONS = [
  { label: 'Option 1' },
  { label: 'Option 2' },
  { label: 'Option 3' },
  { label: 'Option 4' }
]

const FLEX_BUTTONS = [
  { label: 'Option 1' },
  { label: 'Option 2' },
  { label: 'Option 3' },
  { label: 'Option 4' }
]

const VERT_BUTTONS = [
  { label: 'Option 1', amount: '100' },
  { label: 'Option 2', amount: '200' },
  { label: 'Option 3', amount: '300' }
]

@Component({
  templateUrl: './groups.component.html'
})

export class ButtonGroupsComponent {
  buttons = BUTTONS;
  no_outline_buttons = NO_OUTLINE_BUTTONS;
  flex_buttons = FLEX_BUTTONS;
  vert_buttons = VERT_BUTTONS;
  selectedButton;
  public customInputSelected: boolean = false;
  public radioModel: string = 'option_a';

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