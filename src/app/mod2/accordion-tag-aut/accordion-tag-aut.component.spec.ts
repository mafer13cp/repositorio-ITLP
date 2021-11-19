import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionTagAutComponent } from './accordion-tag-aut.component';

describe('AccordionTagAutComponent', () => {
  let component: AccordionTagAutComponent;
  let fixture: ComponentFixture<AccordionTagAutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionTagAutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionTagAutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
