import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from 'ng2-bootstrap';

import { UiComponentsComponent } from './ui-components.component';
import { UiRoutingModule } from './ui-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ComponentListComponent } from './component-list/component-list.component';

import { CardsComponent } from './cards/cards.component';
import { SidebarNavComponent } from './cards/sidebar-nav/sidebar-nav.component';
import { BasicComponent } from './cards/basic/basic.component';
import { VariationsComponent } from './cards/variations/variations.component';
import { NoImageComponent } from './cards/no-image/no-image.component';
import { VideoComponent } from './cards/video/video.component';

/* typography */
import { TypographyComponent } from './typography/typography.component';
import { TypefacesComponent } from './typography/typefaces/typefaces.component';
import { HeadingsComponent } from './typography/headings/headings.component';
import { TypesettingComponent } from './typography/typesetting/typesetting.component';
import { AddressComponent } from './typography/address/address.component';
import { TypographyJumbotronComponent } from './typography/jumbotron/jumbotron.component';
import { BlockquoteComponent } from './typography/blockquote/blockquote.component';
import { ListsComponent } from './typography/lists/lists.component';

/* colors */
import { ColorsComponent } from './colors/colors.component';

/* buttons */
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonsJumbotronComponent } from './buttons/jumbotron/jumbotron.component';

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule,
    TabsModule
  ],
  exports: [
    UiComponentsComponent
  ],
  declarations: [
    UiComponentsComponent,
    SearchBarComponent,
    ComponentListComponent,

    /* typography */
    TypographyComponent,
    TypefacesComponent,
    HeadingsComponent,
    TypographyJumbotronComponent,
    TypesettingComponent,
    AddressComponent,
    BlockquoteComponent,
    ListsComponent,

    /* colors */
    ColorsComponent,

    /* buttons */
    ButtonsComponent,
    ButtonsJumbotronComponent,

    CardsComponent,
    SidebarNavComponent,
    BasicComponent,
    VariationsComponent,
    NoImageComponent,
    VideoComponent
  ]
})
export class UiComponentsModule { }
