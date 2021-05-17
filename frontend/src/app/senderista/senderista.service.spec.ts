import { TestBed } from '@angular/core/testing';

import { SenderistaService } from './senderista.service';

describe('SenderistaService', () => {
  let service: SenderistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenderistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
