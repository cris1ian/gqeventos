import { TestBed } from '@angular/core/testing';

import { ConvertToFileService } from './convert-to-file.service';

describe('ConvertToFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConvertToFileService = TestBed.get(ConvertToFileService);
    expect(service).toBeTruthy();
  });
});
