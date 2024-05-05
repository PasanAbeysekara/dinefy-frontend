import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultRestaurantsComponent } from './result-restaurants.component';

describe('ResultRestaurantsComponent', () => {
  let component: ResultRestaurantsComponent;
  let fixture: ComponentFixture<ResultRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultRestaurantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
