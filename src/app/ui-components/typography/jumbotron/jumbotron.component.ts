import { Component } from '@angular/core';
import { ContentService } from '../../../services/content.service';

@Component({
  selector: 'ddk-typography-jumbotron',
  templateUrl: './jumbotron.component.html'
})
export class TypographyJumbotronComponent {

  constructor(private content: ContentService) {}

}