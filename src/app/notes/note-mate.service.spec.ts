import { TestBed } from '@angular/core/testing';

import { NoteMateService } from './note-mate.service';

describe('NoteMateService', () => {
  let service: NoteMateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteMateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
