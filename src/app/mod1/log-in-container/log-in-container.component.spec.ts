import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInContainerComponent } from './log-in-container.component';

describe('LogInContainerComponent', () => {
  let component: LogInContainerComponent;
  let fixture: ComponentFixture<LogInContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
