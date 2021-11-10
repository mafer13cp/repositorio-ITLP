import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDocPanComponent } from './viewDocPan.component';

describe('ViewDocPanComponent', () => {
  let component: ViewDocPanComponent;
  let fixture: ComponentFixture<ViewDocPanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDocPanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDocPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
