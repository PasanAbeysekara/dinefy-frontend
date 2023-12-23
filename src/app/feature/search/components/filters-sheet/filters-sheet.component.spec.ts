import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersSheetComponent } from './filters-sheet.component';

describe('FiltersSheetComponent', () => {
  let component: FiltersSheetComponent;
  let fixture: ComponentFixture<FiltersSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltersSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
