import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMapComponent } from './product-map.component';

describe('ProductMapComponent', () => {
  let component: ProductMapComponent;
  let fixture: ComponentFixture<ProductMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
