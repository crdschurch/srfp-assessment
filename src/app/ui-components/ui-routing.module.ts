import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiComponentsComponent } from './ui-components.component';

import { CardsComponent } from './cards/cards.component';
import { ComponentListComponent } from './component-list/component-list.component';

/* typography */
import { TypographyComponent } from './typography/typography.component';
import { TypefacesComponent } from './typography/typefaces/typefaces.component';
import { HeadingsComponent } from './typography/headings/headings.component';
import { FormattingComponent } from './typography/formatting/formatting.component';
import { AddressComponent } from './typography/address/address.component';

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
        path: 'typography',
        component: TypographyComponent,
        children: [
          {
            path: '',
            redirectTo: 'typefaces',
            pathMatch: 'full'
          },
          {
            path: 'typefaces',
            component: TypefacesComponent
          },
          {
            path: 'headings',
            component: HeadingsComponent
          },
          {
            path: 'formatting',
            component: FormattingComponent
          },
          {
            path: 'address',
            component: AddressComponent
          }
        ]
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