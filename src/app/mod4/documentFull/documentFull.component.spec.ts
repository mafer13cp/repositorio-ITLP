import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentFullComponent } from './documentFull.component';

describe('DocumentFullComponent', () => {
  let component: DocumentFullComponent;
  let fixture: ComponentFixture<DocumentFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
