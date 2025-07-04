import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCommentsComponent } from './user-comments.component';

describe('UserCommentsComponent', () => {
  let component: UserCommentsComponent;
  let fixture: ComponentFixture<UserCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCommentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
