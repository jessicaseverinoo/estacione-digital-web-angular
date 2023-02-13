import { TestBed } from '@angular/core/testing';

import { ListVehiclesService } from './list-vehicles.service';

describe('ListVehiclesService', () => {
  let service: ListVehiclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListVehiclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
