import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetReserveSheetComponent } from './bottom-sheet-reserve-sheet.component';

describe('BottomSheetReserveSheetComponent', () => {
  let component: BottomSheetReserveSheetComponent;
  let fixture: ComponentFixture<BottomSheetReserveSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomSheetReserveSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomSheetReserveSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
