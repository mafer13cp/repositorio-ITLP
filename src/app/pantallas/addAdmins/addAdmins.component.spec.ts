import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminsComponent } from './addAdmins.component';

describe('AddAdminsComponent', () => {
  let component: AddAdminsComponent;
  let fixture: ComponentFixture<AddAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
