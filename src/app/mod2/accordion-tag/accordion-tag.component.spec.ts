import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionTagComponent } from './accordion-tag.component';

describe('AccordionTagComponent', () => {
  let component: AccordionTagComponent;
  let fixture: ComponentFixture<AccordionTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
