import { TestBed } from '@angular/core/testing';

import { CoordinateGridService } from './coordinate-grid.service';

describe('CoordinateGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoordinateGridService = TestBed.get(CoordinateGridService);
    expect(service).toBeTruthy();
  });
});
