import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDocComponent } from './editar-doc.component';

describe('EditarDocComponent', () => {
  let component: EditarDocComponent;
  let fixture: ComponentFixture<EditarDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
