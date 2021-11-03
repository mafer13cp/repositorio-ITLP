import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterITLPComponent } from './footerItlp.component';

describe('FooterITLPComponent', () => {
  let component: FooterITLPComponent;
  let fixture: ComponentFixture<FooterITLPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterITLPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterITLPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
