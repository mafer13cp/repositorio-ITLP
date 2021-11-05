import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocInfoComponent } from './docInfo.component';

describe('DocInfoComponent', () => {
  let component: DocInfoComponent;
  let fixture: ComponentFixture<DocInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
