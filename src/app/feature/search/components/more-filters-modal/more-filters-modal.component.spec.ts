import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreFiltersModalComponent } from './more-filters-modal.component';

describe('MoreFiltersModalComponent', () => {
  let component: MoreFiltersModalComponent;
  let fixture: ComponentFixture<MoreFiltersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreFiltersModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreFiltersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
