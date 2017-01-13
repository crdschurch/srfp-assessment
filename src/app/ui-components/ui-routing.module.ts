import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiComponentsComponent } from './ui-components.component';

import { CardsComponent } from './cards/cards.component';
import { ComponentListComponent } from './component-list/component-list.component';

/* typography */
import { TypographyComponent } from './typography/typography.component';
import { TypefacesComponent } from './typography/typefaces/typefaces.component';
import { HeadingsComponent } from './typography/headings/headings.component';
import { TypesettingComponent } from './typography/typesetting/typesetting.component';
import { AddressComponent } from './typography/address/address.component';
import { BlockquoteComponent } from './typography/blockquote/blockquote.component';
import { ListsComponent } from './typography/lists/lists.component';

/* colors */
import { ColorsComponent } from './colors/colors.component';

/* buttons */
import { ButtonsComponent } from './buttons/buttons.component';

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
        path: 'colors',
        component: ColorsComponent
      },
      {
        path: 'buttons',
        component: ButtonsComponent
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
            path: 'typesetting',
            component: TypesettingComponent
          },
          {
            path: 'address',
            component: AddressComponent
          },
          {
            path: 'blockquote',
            component: BlockquoteComponent
          },
          {
            path: 'lists',
            component: ListsComponent
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