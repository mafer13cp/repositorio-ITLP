import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirDocComponent } from './subirDoc.component';

describe('SubirDocComponent', () => {
  let component: SubirDocComponent;
  let fixture: ComponentFixture<SubirDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
