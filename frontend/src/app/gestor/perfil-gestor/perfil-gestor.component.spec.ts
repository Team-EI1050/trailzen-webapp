import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilGestorComponent } from './perfil-gestor.component';

describe('PerfilGestorComponent', () => {
  let component: PerfilGestorComponent;
  let fixture: ComponentFixture<PerfilGestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilGestorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
