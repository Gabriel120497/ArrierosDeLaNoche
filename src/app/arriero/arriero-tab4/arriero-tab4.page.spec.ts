import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrieroTab4Page } from './arriero-tab4.page';

describe('ArrieroTab4Page', () => {
  let component: ArrieroTab4Page;
  let fixture: ComponentFixture<ArrieroTab4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrieroTab4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrieroTab4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
