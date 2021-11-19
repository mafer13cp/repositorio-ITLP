import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSideInfoAutComponent } from './doc-side-info-aut.component';

describe('DocSideInfoAutComponent', () => {
  let component: DocSideInfoAutComponent;
  let fixture: ComponentFixture<DocSideInfoAutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocSideInfoAutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSideInfoAutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
