import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalDivisorComponent } from './vertical-divisor.component';

describe('VerticalDivisorComponent', () => {
  let component: VerticalDivisorComponent;
  let fixture: ComponentFixture<VerticalDivisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalDivisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalDivisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
