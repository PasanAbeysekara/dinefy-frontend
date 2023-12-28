import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavFoodItemComponent } from './fav-food-item.component';

describe('FavFoodItemComponent', () => {
  let component: FavFoodItemComponent;
  let fixture: ComponentFixture<FavFoodItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavFoodItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
