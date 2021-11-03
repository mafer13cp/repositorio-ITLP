import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDropDownComponent } from './selectDropDown.component';

describe('SelectDropDownComponent', () => {
  let component: SelectDropDownComponent;
  let fixture: ComponentFixture<SelectDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
