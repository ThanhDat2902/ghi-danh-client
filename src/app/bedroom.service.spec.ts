import { TestBed, inject } from '@angular/core/testing';

import { BedroomService } from './bedroom.service';

describe('BedroomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BedroomService]
    });
  });

  it('should be created', inject([BedroomService], (service: BedroomService) => {
    expect(service).toBeTruthy();
  }));
});
