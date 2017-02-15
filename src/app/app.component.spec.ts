/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CollapseModule } from 'ng2-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ThemeToggleSwitchComponent } from './directives/theme-toggle-switch/theme-toggle-switch.component';
import { ContentBlockModule } from './shared/content-block/content-block.module';

describe('App: CrdsDdk', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ThemeToggleSwitchComponent
      ],
      imports: [
        CollapseModule,
        ContentBlockModule,
        HttpModule,
        RouterTestingModule.withRoutes([])
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
