import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavRestaurantsComponent } from './fav-restaurants.component';

describe('FavRestaurantsComponent', () => {
  let component: FavRestaurantsComponent;
  let fixture: ComponentFixture<FavRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavRestaurantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
