/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RutasComponent } from './rutas.component';

describe('RutasComponent', () => {
  let component: RutasComponent;
  let fixture: ComponentFixture<RutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
