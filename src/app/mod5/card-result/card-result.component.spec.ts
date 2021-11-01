import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResultComponent } from './card-result.component';

describe('CardResultComponent', () => {
  let component: CardResultComponent;
  let fixture: ComponentFixture<CardResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
