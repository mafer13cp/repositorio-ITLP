import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionAutComponent } from './accordion-aut.component';

describe('AccordionAutComponent', () => {
  let component: AccordionAutComponent;
  let fixture: ComponentFixture<AccordionAutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionAutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionAutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
