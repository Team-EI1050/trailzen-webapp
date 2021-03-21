import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmodificarSenderistaComponent } from './modalmodificar-senderista.component';

describe('ModalmodificarSenderistaComponent', () => {
  let component: ModalmodificarSenderistaComponent;
  let fixture: ComponentFixture<ModalmodificarSenderistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalmodificarSenderistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalmodificarSenderistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
