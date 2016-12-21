import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AssetsComponent } from './assets.component';

const assetsRoutes: Routes = [
  { path: 'assets', component: AssetsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(assetsRoutes)
  ],
  declarations: [AssetsComponent]
})
export class AssetsModule { }
