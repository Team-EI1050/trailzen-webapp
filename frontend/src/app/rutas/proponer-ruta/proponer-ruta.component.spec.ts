import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponerRutaComponent } from './proponer-ruta.component';

describe('ProponerRutaComponent', () => {
  let component: ProponerRutaComponent;
  let fixture: ComponentFixture<ProponerRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponerRutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponerRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
