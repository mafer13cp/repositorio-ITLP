import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDespComponent } from './inicio-desp.component';

describe('InicioDespComponent', () => {
  let component: InicioDespComponent;
  let fixture: ComponentFixture<InicioDespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioDespComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioDespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
