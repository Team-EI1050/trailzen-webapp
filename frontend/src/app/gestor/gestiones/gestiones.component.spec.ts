import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionesComponent } from './gestiones.component';

describe('GestionesComponent', () => {
  let component: GestionesComponent;
  let fixture: ComponentFixture<GestionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
