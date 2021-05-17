import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaProponerComponent } from './mapa-proponer.component';

describe('MapaProponerComponent', () => {
  let component: MapaProponerComponent;
  let fixture: ComponentFixture<MapaProponerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaProponerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaProponerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
