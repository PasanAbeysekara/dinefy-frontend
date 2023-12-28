import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavaouritesComponent } from './favaourites.component';

describe('FavaouritesComponent', () => {
  let component: FavaouritesComponent;
  let fixture: ComponentFixture<FavaouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavaouritesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavaouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
