import { TestBed } from '@angular/core/testing';

import { AddCardsService } from './add-cards.service';

describe('AddCardsService', () => {
  let service: AddCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
