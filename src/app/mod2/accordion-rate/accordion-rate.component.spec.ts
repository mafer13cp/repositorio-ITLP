import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionRateComponent } from './accordion-rate.component';

describe('AccordionRateComponent', () => {
  let component: AccordionRateComponent;
  let fixture: ComponentFixture<AccordionRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
