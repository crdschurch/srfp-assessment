/* tslint:disable:no-unused-variable */

import { ElementRef } from '@angular/core';
import { TestBed, async, beforeEachProviders } from '@angular/core/testing';
import { BootstrapDropdownDirective } from './bootstrap-dropdown.directive';

class MockElementRef implements ElementRef {
  nativeElement = {};
}

describe('Directive: BootstrapDropdown', () => {

  beforeEachProviders(() => [
    ElementRef
  ]);

  it('should create an instance', () => {
    let ref = new MockElementRef();
    let directive = new BootstrapDropdownDirective();
    expect(directive).toBeTruthy();
  });
});
