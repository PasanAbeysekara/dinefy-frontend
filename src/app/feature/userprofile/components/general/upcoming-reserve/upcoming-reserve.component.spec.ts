import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingReserveComponent } from './upcoming-reserve.component';

describe('UpcomingReserveComponent', () => {
  let component: UpcomingReserveComponent;
  let fixture: ComponentFixture<UpcomingReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingReserveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcomingReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
