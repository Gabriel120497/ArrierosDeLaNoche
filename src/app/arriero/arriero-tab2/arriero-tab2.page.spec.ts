import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrieroTab2Page } from './arriero-tab2.page';

describe('ArrieroTab2Page', () => {
  let component: ArrieroTab2Page;
  let fixture: ComponentFixture<ArrieroTab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrieroTab2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrieroTab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
