import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ddk-basic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './basic.component.html'
})
export class BasicComponent implements OnInit {
  public responsiveTabs:Array<any> = [
    {
      title: 'Mobile',
      content: 'Dynamic content 1'
    },
    {
      title: 'Tablet',
      content: 'Dynamic content 3'
    },
    {
      title: 'Desktop',
      content: 'Dynamic content 4'
    }
  ];

  public codeTabs:Array<any> = [
    {
      title: 'HTML',
      content: `<div class="row">
          <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
              <img src="..." alt="...">
              <div class="caption">
                <h3>Thumbnail Label</h3>
                <p>...</p>
                <p>
                  <a href="#" class="btn btn-primary" role="button">Button</a>
                  <a href="#" class="btn btn-default" role="button">Button</a>
                </p>
              </div>
            </div>
          </div>
        </div>`
    },
    {
      title: 'JS',
      content: `<div class="row">
          <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
              <img src="..." alt="...">
              <div class="caption">
                <h3>Thumbnail Label</h3>
                <p>...</p>
                <p>
                  <a href="#" class="btn btn-primary" role="button">Button</a>
                  <a href="#" class="btn btn-default" role="button">Button</a>
                </p>
              </div>
            </div>
          </div>
        </div>`
    },
    {
      title: 'NG1',
      content: `<div class="row">
          <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
              <img src="..." alt="...">
              <div class="caption">
                <h3>Thumbnail Label</h3>
                <p>...</p>
                <p>
                  <a href="#" class="btn btn-primary" role="button">Button</a>
                  <a href="#" class="btn btn-default" role="button">Button</a>
                </p>
              </div>
            </div>
          </div>
        </div>`
    },
    {
      title: 'NG2',
      content: `<div class="row">
          <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
              <img src="..." alt="...">
              <div class="caption">
                <h3>Thumbnail Label</h3>
                <p>...</p>
                <p>
                  <a href="#" class="btn btn-primary" role="button">Button</a>
                  <a href="#" class="btn btn-default" role="button">Button</a>
                </p>
              </div>
            </div>
          </div>
        </div>`
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
