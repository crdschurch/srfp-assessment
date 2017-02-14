import { Component } from '@angular/core';

@Component({
  selector: 'ddk-component-list',
  templateUrl: './component-list.component.html'
})
export class ComponentListComponent {
  components = [
    {
      'image': 'http://placehold.it/175x115',
      'heading': 'Buttons',
      'description': 'Morbi leo risus, porta ac consectetur ac...'
    },
    {
      'image': 'http://placehold.it/175x115',
      'heading': 'Containers',
      'description': 'Sed posuere consectetur est at lobortis. Aenean eu leo quam...'
    },
    {
      'image': 'http://placehold.it/175x115',
      'heading': 'Cards',
      'description': 'Aenean lacinia bibendum nulla sed consectetur...'
    },
    {
      'image': 'http://placehold.it/175x115',
      'heading': 'Carousels',
      'description': 'Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet...'
    },
    {
      'image': 'http://placehold.it/175x115',
      'heading': 'Drawers',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    }
  ];

}
