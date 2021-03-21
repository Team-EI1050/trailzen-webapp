import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderistaComponent } from './senderista.component';

describe('SenderistaComponent', () => {
  let component: SenderistaComponent;
  let fixture: ComponentFixture<SenderistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenderistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenderistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
