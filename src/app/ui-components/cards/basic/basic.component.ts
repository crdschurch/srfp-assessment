import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ddk-basic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './basic.component.html'
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
