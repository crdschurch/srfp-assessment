import { Component } from '@angular/core';

@Component({
  templateUrl: './groups.component.html'
})
export class ButtonGroupsComponent {
  public customInputSelected: boolean = false;
  something: String = 'sssss';

  public selectButton() {
    this.customInputSelected = false;
  }

  public selectCustom() {
    this.customInputSelected = true;
  }
}