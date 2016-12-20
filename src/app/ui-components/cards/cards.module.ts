import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { CardsComponent } from './cards.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { BasicComponent } from './basic/basic.component';
import { VariationsComponent } from './variations/variations.component';
import { NoImageComponent } from './no-image/no-image.component';
import { VideoComponent } from './video/video.component';

const cardsRoutes: Routes = [
  { path: 'cards', component: CardsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cardsRoutes),
    TabsModule
  ],
  exports: [
    CardsModule
  ],
  declarations: [
    CardsComponent,
    SidebarNavComponent,
    BasicComponent,
    VariationsComponent,
    NoImageComponent,
    VideoComponent
  ]
})
export class CardsModule { }
