import { TestBed } from '@angular/core/testing';

import { DataDriverService } from './data-driver.service';

describe('DataDriverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataDriverService = TestBed.get(DataDriverService);
    expect(service).toBeTruthy();
  });
});
