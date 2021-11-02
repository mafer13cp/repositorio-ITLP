import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDocComponent } from './card-doc.component';

describe('CardDocComponent', () => {
  let component: CardDocComponent;
  let fixture: ComponentFixture<CardDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
