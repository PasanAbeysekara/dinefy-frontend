import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentResultComponent } from './restaurent-result.component';

describe('RestaurentResultComponent', () => {
  let component: RestaurentResultComponent;
  let fixture: ComponentFixture<RestaurentResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurentResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
