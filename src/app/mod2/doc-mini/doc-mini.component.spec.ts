import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocMiniComponent } from './doc-mini.component';

describe('DocMiniComponent', () => {
  let component: DocMiniComponent;
  let fixture: ComponentFixture<DocMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocMiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
