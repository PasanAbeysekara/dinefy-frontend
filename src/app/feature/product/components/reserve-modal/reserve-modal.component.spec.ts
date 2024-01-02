import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveModalComponent } from './reserve-modal.component';

describe('ReserveModalComponent', () => {
  let component: ReserveModalComponent;
  let fixture: ComponentFixture<ReserveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReserveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
