/* tslint:disable:no-unused-variable */

import { ElementRef } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { BootstrapDropdownDirective } from './bootstrap-dropdown.directive';
import { BootstrapDropdownService } from './bootstrap-dropdown.service';

class MockElementRef implements ElementRef {
  nativeElement = {};
}

describe('Directive: BootstrapDropdown', () => {

  beforeEach(() => [
    ElementRef
  ]);

  it('should create an instance', () => {
    let ref = new MockElementRef();
    let service = new BootstrapDropdownService();
    let directive = new BootstrapDropdownDirective(ref, service);
    expect(directive).toBeTruthy();
  });
});
