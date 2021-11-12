import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSideInfoComponent } from './doc-side-info.component';

describe('DocSideInfoComponent', () => {
  let component: DocSideInfoComponent;
  let fixture: ComponentFixture<DocSideInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocSideInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSideInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
