import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CollapseModule } from 'ng2-bootstrap';
import { BootstrapDropdownDirective } from './directives/bootstrap-dropdown/bootstrap-dropdown.directive';
import { BootstrapDropdownService } from './directives/bootstrap-dropdown/bootstrap-dropdown.service';
import { ThemeToggleSwitch } from './directives/theme-toggle-switch/theme-toggle-switch.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DesignersModule } from './designers/designers.module';
import { DevelopersModule } from './developers/developers.module';
import { UiComponentsModule } from './ui-components/ui-components.module';
import { AssetsModule } from './assets/assets.module';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    BootstrapDropdownDirective,
    ThemeToggleSwitch
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CollapseModule,
    DesignersModule,
    DevelopersModule,
    UiComponentsModule,
    AssetsModule,
    AppRoutingModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    BootstrapDropdownService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
