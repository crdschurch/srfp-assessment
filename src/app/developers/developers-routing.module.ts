import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevelopersComponent } from './developers.component';
import { DevelopersIntroComponent } from './intro/intro.component';
import { Ng2ComponentsComponent } from './ng2-components/ng2-components.component';

const developerRoutes: Routes = [
  {
    path: 'developers',
    component: DevelopersComponent,
    children: [
      {
        path: '',
        component: DevelopersIntroComponent
      },
      {
        path: 'ng2-components',
        component: Ng2ComponentsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(developerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DeveloperRoutingModule {}
