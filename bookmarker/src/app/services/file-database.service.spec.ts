import { TestBed, inject } from '@angular/core/testing';

import { FileDatabaseService } from './file-database.service';

describe('FileDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileDatabaseService]
    });
  });

  it('should be created', inject([FileDatabaseService], (service: FileDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
