import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAutoComponent } from './modal-auto.component';

describe('ModalAutoComponent', () => {
  let component: ModalAutoComponent;
  let fixture: ComponentFixture<ModalAutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAutoComponent]
    });
    fixture = TestBed.createComponent(ModalAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
