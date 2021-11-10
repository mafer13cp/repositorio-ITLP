import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsrComponent } from './perfilUsr.component';

describe('PerfilUsrComponent', () => {
  let component: PerfilUsrComponent;
  let fixture: ComponentFixture<PerfilUsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilUsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
