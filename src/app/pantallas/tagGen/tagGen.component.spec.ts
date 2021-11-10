import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagGenComponent } from './tagGen.component';

describe('TagGenComponent', () => {
  let component: TagGenComponent;
  let fixture: ComponentFixture<TagGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
