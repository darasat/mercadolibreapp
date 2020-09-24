import { TestBed } from '@angular/core/testing';

import { MercadolibreapiService } from './mercadolibreapi.service';

describe('MercadolibreapiService', () => {
  let service: MercadolibreapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercadolibreapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
