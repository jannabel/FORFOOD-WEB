/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Products_cardComponent } from './products_card.component';

describe('Products_cardComponent', () => {
  let component: Products_cardComponent;
  let fixture: ComponentFixture<Products_cardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Products_cardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Products_cardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
