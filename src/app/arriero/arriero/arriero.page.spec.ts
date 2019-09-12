import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrieroPage } from './arriero.page';

describe('ArrieroPage', () => {
  let component: ArrieroPage;
  let fixture: ComponentFixture<ArrieroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrieroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrieroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
