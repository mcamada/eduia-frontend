import { TestBed } from '@angular/core/testing';

import { AiProjectsServiceS } from './ai-projects.service';

describe('AiProjectsServiceService', () => {
  let service: AiProjectsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiProjectsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
