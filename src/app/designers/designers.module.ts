import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DesignersComponent } from './designers.component';

const designRoutes: Routes = [
  { path: 'design', component: DesignersComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(designRoutes)
  ],
  declarations: [DesignersComponent]
})
export class DesignersModule { }
