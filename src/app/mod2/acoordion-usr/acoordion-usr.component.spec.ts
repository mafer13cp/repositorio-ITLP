import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoordionUsrComponent } from './acoordion-usr.component';

describe('AcoordionUsrComponent', () => {
  let component: AcoordionUsrComponent;
  let fixture: ComponentFixture<AcoordionUsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcoordionUsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcoordionUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
