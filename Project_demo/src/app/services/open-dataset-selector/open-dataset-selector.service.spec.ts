import { TestBed } from '@angular/core/testing';

import { DatasetSelectorService } from './open-dataset-selector.service';

describe('DatasetSelectorService', () => {
  let service: DatasetSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasetSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
