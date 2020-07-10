import { TestBed } from '@angular/core/testing';

import { OnlineBankingSystemService } from './online-banking-system.service';

describe('OnlineBankingSystemService', () => {
  let service: OnlineBankingSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineBankingSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
