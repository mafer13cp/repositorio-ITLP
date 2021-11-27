import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipautorComponent } from './chipautor.component';

describe('ChipautorComponent', () => {
  let component: ChipautorComponent;
  let fixture: ComponentFixture<ChipautorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipautorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
