import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSenderistaComponent } from './perfilSenderista.component';

describe('PerfilSenderistaComponent', () => {
  let component: PerfilSenderistaComponent;
  let fixture: ComponentFixture<PerfilSenderistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilSenderistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilSenderistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
