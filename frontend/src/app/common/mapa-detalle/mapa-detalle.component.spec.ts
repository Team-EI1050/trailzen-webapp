import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDetalleComponent } from './mapa-detalle.component';

describe('MapaDetalleComponent', () => {
  let component: MapaDetalleComponent;
  let fixture: ComponentFixture<MapaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
