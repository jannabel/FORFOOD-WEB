/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { C_productsComponent } from './c_products.component';

describe('C_productsComponent', () => {
  let component: C_productsComponent;
  let fixture: ComponentFixture<C_productsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C_productsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C_productsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
