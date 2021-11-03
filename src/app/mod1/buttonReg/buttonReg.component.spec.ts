import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRegComponent } from './buttonReg.component';

describe('ButtonRegComponent', () => {
  let component: ButtonRegComponent;
  let fixture: ComponentFixture<ButtonRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
