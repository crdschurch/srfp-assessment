import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentBlockModule } from 'crds-ng2-content-block';

import { DeveloperRoutingModule } from './developers-routing.module';
import { DevelopersComponent } from './developers.component';
import { DevelopersIntroComponent } from './intro/intro.component';
import { Ng2ComponentsComponent } from './ng2-components/ng2-components.component';

@NgModule({
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    ContentBlockModule
  ],
  declarations: [
    DevelopersComponent,
    DevelopersIntroComponent,
    Ng2ComponentsComponent
  ]
})
export class DevelopersModule { }
