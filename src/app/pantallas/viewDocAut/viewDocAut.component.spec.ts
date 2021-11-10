import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDocAutComponent } from './viewDocAut.component';

describe('ViewDocAutComponent', () => {
  let component: ViewDocAutComponent;
  let fixture: ComponentFixture<ViewDocAutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDocAutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDocAutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
