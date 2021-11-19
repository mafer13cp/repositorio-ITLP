import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionTextAutComponent } from './accordion-text-aut.component';

describe('AccordionTextAutComponent', () => {
  let component: AccordionTextAutComponent;
  let fixture: ComponentFixture<AccordionTextAutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionTextAutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionTextAutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
