import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevCardComponent } from './dev-card.component';

describe('DevCardComponent', () => {
  let component: DevCardComponent;
  let fixture: ComponentFixture<DevCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
