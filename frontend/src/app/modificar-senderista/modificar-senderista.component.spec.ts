import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSenderistaComponent } from './modificar-senderista.component';

describe('ModificarSenderistaComponent', () => {
  let component: ModificarSenderistaComponent;
  let fixture: ComponentFixture<ModificarSenderistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarSenderistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarSenderistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
