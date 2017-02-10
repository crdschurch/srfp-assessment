import { Component, EventEmitter, Input, Output, AfterViewInit } from '@angular/core';
import { ContentService } from './content.service';

@Component({
  selector: 'content-block',
  template: '<span [innerHtml]="content.getContent(id)"></span>'
})
export class ContentBlockComponent {

  private output: String;

  @Input() id: string;

  constructor(private content: ContentService) {}

}
