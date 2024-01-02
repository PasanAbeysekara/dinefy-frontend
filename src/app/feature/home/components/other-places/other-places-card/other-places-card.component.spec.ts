import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPlacesCardComponent } from './other-places-card.component';

describe('OtherPlacesCardComponent', () => {
  let component: OtherPlacesCardComponent;
  let fixture: ComponentFixture<OtherPlacesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherPlacesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherPlacesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
