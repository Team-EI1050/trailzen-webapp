import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarSenderistaComponent } from './modal-eliminar-senderista.component';

describe('ModalEliminarSenderistaComponent', () => {
  let component: ModalEliminarSenderistaComponent;
  let fixture: ComponentFixture<ModalEliminarSenderistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarSenderistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEliminarSenderistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
