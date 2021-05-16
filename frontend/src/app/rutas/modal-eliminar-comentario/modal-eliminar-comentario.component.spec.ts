import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarComentarioComponent } from './modal-eliminar-comentario.component';

describe('ModalEliminarComentarioComponent', () => {
  let component: ModalEliminarComentarioComponent;
  let fixture: ComponentFixture<ModalEliminarComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarComentarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEliminarComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
