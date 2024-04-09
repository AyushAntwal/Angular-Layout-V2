import { TestBed } from '@angular/core/testing';

import { ViewpointService } from '../viewpoint/viewpoint.service';

describe('ViewpointService', () => {
  let service: ViewpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
