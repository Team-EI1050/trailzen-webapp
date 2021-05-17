import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesRutaComponent } from './detalles-ruta.component';

describe('DetallesRutaComponent', () => {
  let component: DetallesRutaComponent;
  let fixture: ComponentFixture<DetallesRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesRutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
