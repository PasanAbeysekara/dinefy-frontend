import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentCard1Component } from './restaurent-card-1.component';

describe('RestaurentCard1Component', () => {
  let component: RestaurentCard1Component;
  let fixture: ComponentFixture<RestaurentCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurentCard1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurentCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
