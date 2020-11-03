import { TestBed } from '@angular/core/testing';

import { DesignGuard } from './design.guard';

describe('DesignGuard', () => {
  let guard: DesignGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DesignGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
