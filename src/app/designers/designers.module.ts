import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContentBlockModule } from '../shared/content-block/content-block.module';
import { DesignersComponent } from './designers.component';

const designRoutes: Routes = [
  { path: 'designers', component: DesignersComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(designRoutes),
    ContentBlockModule
  ],
  declarations: [DesignersComponent]
})
export class DesignersModule { }
