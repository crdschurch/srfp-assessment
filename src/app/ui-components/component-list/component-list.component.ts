import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ddk-component-list',
  templateUrl: './component-list.component.html'
})
export class ComponentListComponent implements OnInit {
  components = [
    {
      'image': 'http://placehold.it/175x115',
      'heading': 'Buttons',
      'description': 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
    },
    {
      'image': 'http://placehold.it/175x115',
      'heading': 'Containers',
      'description': 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.'
    },
    {
      'image': 'http://placehold.it/175x115',
      'heading': 'Cards',
      'description': 'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.'
    },
    {
      'image': 'http://placehold.it/175x115',
      'heading': 'Carousels',
      'description': 'Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla.'
    },
    {
      'image': 'http://placehold.it/175x115',
      'heading': 'Drawers',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
