import { TestBed } from '@angular/core/testing';

import { ImdbMockService } from './imdb-mock.service';

describe('ImdbMockService', () => {
  let service: ImdbMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImdbMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
