import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpContComponent } from './signUpCont.component';

describe('SignUpContComponent', () => {
  let component: SignUpContComponent;
  let fixture: ComponentFixture<SignUpContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpContComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
