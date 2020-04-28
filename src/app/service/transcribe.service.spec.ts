import { TestBed } from '@angular/core/testing';

import { TranscribeService } from './transcribe.service';

describe('TranscribeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranscribeService = TestBed.get(TranscribeService);
    expect(service).toBeTruthy();
  });
});
