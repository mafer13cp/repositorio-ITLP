import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeInputTextComponent } from './largeInputText.component';

describe('LargeInputTextComponent', () => {
  let component: LargeInputTextComponent;
  let fixture: ComponentFixture<LargeInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeInputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
