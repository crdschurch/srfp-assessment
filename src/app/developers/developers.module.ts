import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentBlockModule } from 'crds-ng2-content-block';

import { DevelopersComponent } from './developers.component';

const devRoutes: Routes = [
  { path: 'developers', component: DevelopersComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(devRoutes),
    ContentBlockModule
  ],
  declarations: [
    DevelopersComponent
  ]
})
export class DevelopersModule { }
