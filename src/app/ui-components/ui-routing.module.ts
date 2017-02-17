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
import { WebFontsComponent } from './typography/web-fonts/web-fonts.component';

/* colors */
import { ColorsComponent } from './colors/colors.component';
import { SwatchesComponent } from './colors/swatches/swatches.component';
import { ColorOverridesComponent } from './colors/overrides/overrides.component';
import { ColorBackgroundsComponent } from './colors/backgrounds/backgrounds.component';

/* utility classes */
import { UtilitiesComponent } from './utilities/utilities.component';

/* alerts */
import { AlertsComponent } from './alerts/alerts.component';

/* loaders */
import { LoadersComponent } from './loaders/loaders.component';
import { LoaderIconsComponent } from './loaders/icons/icons.component';
import { SkeletonBlocksComponent } from './loaders/skeleton-blocks/skeleton-blocks.component';

/* buttons */
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonStylesComponent } from './buttons/styles/styles.component';
import { ButtonSizesComponent } from './buttons/sizes/sizes.component';
import { ButtonGroupsComponent } from './buttons/groups/groups.component';

/* tables */
import { TablesComponent } from './tables/tables.component';

/* forms */
import { FormsComponent } from './forms/forms.component';
import { FormControlsComponent } from './forms/form-controls/form-controls.component';
import { FormStatesComponent } from './forms/form-states/form-states.component';
import { FormDatepickerComponent } from './forms/datepicker/datepicker.component';
import { FormGroupsComponent } from './forms/form-groups/groups.component';

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
        component: ColorsComponent,
        children: [
          {
            path: '',
            redirectTo: 'swatches',
            pathMatch: 'full'
          },
          {
            path: 'swatches',
            component: SwatchesComponent
          },
          {
            path: 'overrides',
            component: ColorOverridesComponent
          },
          {
            path: 'backgrounds',
            component: ColorBackgroundsComponent
          }
        ]
      },
      {
        path: 'utilities',
        component: UtilitiesComponent
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        children: [
          {
            path: '',
            redirectTo: 'styles',
            pathMatch: 'full'
          },
          {
            path: 'styles',
            component: ButtonStylesComponent
          },
          {
            path: 'sizes',
            component: ButtonSizesComponent
          },
          {
            path: 'groups',
            component: ButtonGroupsComponent
          }
        ]
      },
      {
        path: 'alerts',
        component: AlertsComponent
      },
      {
        path: 'loaders',
        component: LoadersComponent,
        children: [
          {
            path: '',
            redirectTo: 'icons',
            pathMatch: 'full'
          },
          {
            path: 'icons',
            component: LoaderIconsComponent
          },
          {
            path: 'skeleton-blocks',
            component: SkeletonBlocksComponent
          }
        ]
      },
      {
        path: 'forms',
        component: FormsComponent,
        children: [
          {
            path: '',
            redirectTo: 'controls',
            pathMatch: 'full'
          },
          {
            path: 'controls',
            component: FormControlsComponent
          },
          {
            path: 'states',
            component: FormStatesComponent
          },
          {
            path: 'datepicker',
            component: FormDatepickerComponent
          },
          {
            path: 'groups',
            component: FormGroupsComponent
          }
        ]
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
            path: 'web-fonts',
            component: WebFontsComponent
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
        path: 'tables',
        component: TablesComponent
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