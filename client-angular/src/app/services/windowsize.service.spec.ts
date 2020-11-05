import { TestBed } from '@angular/core/testing';

import { WindowsizeService } from './windowsize.service';

describe('WindowsizeService', () => {
  let service: WindowsizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowsizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
