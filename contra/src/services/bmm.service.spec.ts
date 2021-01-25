import { TestBed } from '@angular/core/testing';

import { BmmService } from './bmm.service';

describe('BmmService', () => {
  let service: BmmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
