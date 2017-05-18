import { TestBed, inject } from '@angular/core/testing';

import { WindowRefService } from './window-ref.service';

describe('WindowRefService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowRefService]
    });
  });

  it('should create service', inject([WindowRefService], (service: WindowRefService) => {
    expect(service).toBeTruthy();
  }));
});
