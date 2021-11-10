import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDocUsrComponent } from './viewDocUsr.component';

describe('ViewDocUsrComponent', () => {
  let component: ViewDocUsrComponent;
  let fixture: ComponentFixture<ViewDocUsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDocUsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDocUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
