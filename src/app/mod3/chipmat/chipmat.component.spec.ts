import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipmatComponent } from './chipmat.component';

describe('ChipmatComponent', () => {
  let component: ChipmatComponent;
  let fixture: ComponentFixture<ChipmatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipmatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
