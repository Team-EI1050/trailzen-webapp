import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmodificarGestorComponent } from './modalmodificar-gestor.component';

describe('ModalmodificarGestorComponent', () => {
  let component: ModalmodificarGestorComponent;
  let fixture: ComponentFixture<ModalmodificarGestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalmodificarGestorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalmodificarGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
