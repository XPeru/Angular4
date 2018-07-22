import { TestBed, inject } from '@angular/core/testing';

import { AccesoService } from './acceso.service';

describe('AccesoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccesoService]
    });
  });

  it('should be created', inject([AccesoService], (service: AccesoService) => {
    expect(service).toBeTruthy();
  }));
});
