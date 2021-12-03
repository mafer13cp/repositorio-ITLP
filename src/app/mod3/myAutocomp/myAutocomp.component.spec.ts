import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAutocompComponent } from './myAutocomp.component';

describe('MyAutocompComponent', () => {
  let component: MyAutocompComponent;
  let fixture: ComponentFixture<MyAutocompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAutocompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAutocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
