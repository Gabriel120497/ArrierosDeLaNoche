import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTab2Page } from './admin-tab2.page';

describe('AdminTab2Page', () => {
  let component: AdminTab2Page;
  let fixture: ComponentFixture<AdminTab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTab2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
