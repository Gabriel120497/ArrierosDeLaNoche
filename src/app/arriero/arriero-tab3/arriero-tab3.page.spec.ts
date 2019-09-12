import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrieroTab3Page } from './arriero-tab3.page';

describe('ArrieroTab3Page', () => {
  let component: ArrieroTab3Page;
  let fixture: ComponentFixture<ArrieroTab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrieroTab3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrieroTab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
