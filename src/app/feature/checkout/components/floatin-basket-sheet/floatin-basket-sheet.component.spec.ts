import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatinBasketSheetComponent } from './floatin-basket-sheet.component';

describe('FloatinBasketSheetComponent', () => {
  let component: FloatinBasketSheetComponent;
  let fixture: ComponentFixture<FloatinBasketSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatinBasketSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloatinBasketSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
