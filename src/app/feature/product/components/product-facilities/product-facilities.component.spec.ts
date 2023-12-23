import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFacilitiesComponent } from './product-facilities.component';

describe('ProductFacilitiesComponent', () => {
  let component: ProductFacilitiesComponent;
  let fixture: ComponentFixture<ProductFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFacilitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
