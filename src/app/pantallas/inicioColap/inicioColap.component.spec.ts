import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioColapComponent } from './inicioColap.component';

describe('InicioColapComponent', () => {
  let component: InicioColapComponent;
  let fixture: ComponentFixture<InicioColapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioColapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioColapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
