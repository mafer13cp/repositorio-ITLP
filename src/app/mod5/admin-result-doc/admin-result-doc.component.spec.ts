import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResultDocComponent } from './admin-result-doc.component';

describe('AdminResultDocComponent', () => {
  let component: AdminResultDocComponent;
  let fixture: ComponentFixture<AdminResultDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminResultDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResultDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
