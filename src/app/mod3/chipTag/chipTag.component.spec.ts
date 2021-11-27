import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipTagComponent } from './chipTag.component';

describe('ChipTagComponent', () => {
  let component: ChipTagComponent;
  let fixture: ComponentFixture<ChipTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
