import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatGenComponent } from './matGen.component';

describe('MatGenComponent', () => {
  let component: MatGenComponent;
  let fixture: ComponentFixture<MatGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
