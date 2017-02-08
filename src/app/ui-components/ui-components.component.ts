import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'ddk-ui-components',
  template: '<router-outlet></router-outlet>'
})
export class UiComponentsComponent {
  constructor(private content: ContentService) {
  }
}
