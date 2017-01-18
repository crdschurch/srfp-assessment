import { Component } from '@angular/core';

@Component({
  templateUrl: './groups.component.html'
})
export class ButtonGroupsComponent {
  public customInputSelected: boolean = false;

  public selectButton() {
    this.customInputSelected = false;
  }

  public selectCustom() {
    this.customInputSelected = true;
  }
}