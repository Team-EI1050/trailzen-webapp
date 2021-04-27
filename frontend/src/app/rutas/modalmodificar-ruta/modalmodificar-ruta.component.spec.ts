import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmodificarRutaComponent } from './modalmodificar-ruta.component';

describe('ModalmodificarRutaComponent', () => {
  let component: ModalmodificarRutaComponent;
  let fixture: ComponentFixture<ModalmodificarRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalmodificarRutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalmodificarRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
