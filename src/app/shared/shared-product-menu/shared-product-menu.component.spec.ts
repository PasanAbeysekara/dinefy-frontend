import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedProductMenuComponent } from './shared-product-menu.component';

describe('SharedProductMenuComponent', () => {
  let component: SharedProductMenuComponent;
  let fixture: ComponentFixture<SharedProductMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedProductMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedProductMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
