import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResBusquedaComponent } from './resBusqueda.component';

describe('ResBusquedaComponent', () => {
  let component: ResBusquedaComponent;
  let fixture: ComponentFixture<ResBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResBusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
