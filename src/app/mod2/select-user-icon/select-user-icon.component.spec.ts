import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUserIconComponent } from './select-user-icon.component';

describe('SelectUserIconComponent', () => {
  let component: SelectUserIconComponent;
  let fixture: ComponentFixture<SelectUserIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectUserIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUserIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
