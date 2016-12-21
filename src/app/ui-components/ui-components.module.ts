import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UiComponentsComponent } from './ui-components.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ComponentListComponent } from './component-list/component-list.component';

import { CardsModule } from './cards/cards.module';

const uiRoutes: Routes = [
  {
    path: 'ui-components',
    component: UiComponentsComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(uiRoutes)
  ],
  exports: [
    UiComponentsComponent
  ],
  declarations: [
    UiComponentsComponent,
    SearchBarComponent,
    ComponentListComponent
  ]
})
export class UiComponentsModule { }
