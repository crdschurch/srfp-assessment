import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DevelopersComponent } from './developers.component';

const devRoutes: Routes = [
  { path: 'developers', component: DevelopersComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(devRoutes)
  ],
  declarations: [DevelopersComponent]
})
export class DevelopersModule { }
