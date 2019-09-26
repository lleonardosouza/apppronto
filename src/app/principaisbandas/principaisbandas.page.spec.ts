import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipaisbandasPage } from './principaisbandas.page';

describe('PrincipaisbandasPage', () => {
  let component: PrincipaisbandasPage;
  let fixture: ComponentFixture<PrincipaisbandasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipaisbandasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipaisbandasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
