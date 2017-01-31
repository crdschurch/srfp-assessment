import { Component } from '@angular/core';

@Component({
  templateUrl: './datepicker.component.html'
})
export class FormDatepickerComponent {
  public dt: Date = new Date();

  public today(): void {
    this.dt = new Date();
  }
}