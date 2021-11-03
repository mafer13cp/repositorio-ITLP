import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderITLPComponent } from './headerItlp.component';

describe('HeaderITLPComponent', () => {
  let component: HeaderITLPComponent;
  let fixture: ComponentFixture<HeaderITLPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderITLPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderITLPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
