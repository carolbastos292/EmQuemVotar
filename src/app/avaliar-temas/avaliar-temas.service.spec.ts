import { TestBed, inject } from '@angular/core/testing';

import { AvaliarTemasService } from './avaliar-temas.service';

describe('AvaliarTemasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvaliarTemasService]
    });
  });

  it('should be created', inject([AvaliarTemasService], (service: AvaliarTemasService) => {
    expect(service).toBeTruthy();
  }));
});
