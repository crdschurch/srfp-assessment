import { NgModule } from '@angular/core';
import { ContentBlockComponent } from './content-block.component';
import { ContentService } from './content.service';

@NgModule({
  providers: [ContentService],
  declarations: [ContentBlockComponent],
  exports: [ContentBlockComponent],
  bootstrap: [ContentBlockComponent]
})
export class ContentBlockModule {
  constructor(protected content: ContentService) {
    this.content.loadData();
  }
}