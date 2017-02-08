import { Component, EventEmitter, Input, Output, AfterViewInit } from '@angular/core';
import { ContentService } from './content.service';

@Component({
  selector: 'content-block',
  template: '<span [innerHtml]="content.getContent(key)"></span>'
})
export class ContentBlockComponent {

  private output: String;

  @Input('id') key: string;

  constructor(private content: ContentService) {}

}
