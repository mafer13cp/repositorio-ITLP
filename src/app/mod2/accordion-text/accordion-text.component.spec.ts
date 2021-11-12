import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionTextComponent } from './accordion-text.component';

describe('AccordionTextComponent', () => {
  let component: AccordionTextComponent;
  let fixture: ComponentFixture<AccordionTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
