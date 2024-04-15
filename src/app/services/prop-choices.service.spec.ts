import { TestBed } from '@angular/core/testing';

import { PropChoicesService } from './prop-choices.service';

describe('PropChoicesService', () => {
  let service: PropChoicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropChoicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
