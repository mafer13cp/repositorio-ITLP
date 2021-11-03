import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentHistoryComponent } from './comment-history.component';

describe('CommentHistoryComponent', () => {
  let component: CommentHistoryComponent;
  let fixture: ComponentFixture<CommentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
