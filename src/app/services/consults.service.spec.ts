import { TestBed, getTestBed } from '@angular/core/testing';

import { ConsultsService } from './consults.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('ConsultsService', () => {
  //Tambien s puede usar el inject()
  let injector: TestBed
  //Simular solicitudes HTTP
  let httpMock: HttpTestingController
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  })
  injector = getTestBed()
  httpMock = injector.get(HttpTestingController)

  it('should be created', () => {
    const service: ConsultsService = TestBed.get(ConsultsService);
    expect(service).toBeTruthy();
  });

  it('')

});
