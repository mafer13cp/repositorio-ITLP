import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByBarComponent } from './search-by-bar.component';

describe('SearchByBarComponent', () => {
  let component: SearchByBarComponent;
  let fixture: ComponentFixture<SearchByBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
