import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoDetailsComponent } from './auto-details.component';

describe('AutoDetailsComponent', () => {
  let component: AutoDetailsComponent;
  let fixture: ComponentFixture<AutoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoDetailsComponent]
    });
    fixture = TestBed.createComponent(AutoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
