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

@Component({
  templateUrl: './groups.component.html'
})

export class ButtonGroupsComponent {
  buttons = BUTTONS;
  no_outline_buttons = NO_OUTLINE_BUTTONS;
  flex_buttons = FLEX_BUTTONS;
  selectedButton;
  public radioModel: string = 'option_a';

  onSelect(button): void {
    this.selectedButton = button;
  }
}