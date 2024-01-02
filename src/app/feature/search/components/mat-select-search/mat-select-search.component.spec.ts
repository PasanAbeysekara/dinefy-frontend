import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSelectSearchComponent } from './mat-select-search.component';

describe('MatSelectSearchComponent', () => {
  let component: MatSelectSearchComponent;
  let fixture: ComponentFixture<MatSelectSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSelectSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatSelectSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
