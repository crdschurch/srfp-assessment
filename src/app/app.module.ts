import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CollapseModule } from "ng2-bootstrap/ng2-bootstrap";
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BootstrapDropdownDirective } from './directives/bootstrap-dropdown.directive';
import { FooterComponent } from './layout/footer/footer.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { ComponentListComponent } from './layout/component-list/component-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BootstrapDropdownDirective,
    FooterComponent,
    LandingPageComponent,
    ComponentListComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
