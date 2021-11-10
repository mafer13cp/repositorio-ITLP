import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemGenComponent } from './temGen.component';

describe('TemGenComponent', () => {
  let component: TemGenComponent;
  let fixture: ComponentFixture<TemGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
