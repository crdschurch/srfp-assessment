import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiComponentsComponent } from './ui-components.component';
import { CardsComponent } from './cards/cards.component';
import { ComponentListComponent } from './component-list/component-list.component';

const uiRoutes: Routes = [
  {
    path: 'ui',
    component: UiComponentsComponent,
    children: [
      {
        path: '',
        component: ComponentListComponent
      },
      {
        path: 'cards',
        component: CardsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(uiRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UiRoutingModule {}