import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTab3Page } from './admin-tab3.page';

describe('AdminTab3Page', () => {
  let component: AdminTab3Page;
  let fixture: ComponentFixture<AdminTab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTab3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
