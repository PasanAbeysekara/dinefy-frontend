import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErgMenuComponent } from './erg-menu.component';

describe('ErgMenuComponent', () => {
  let component: ErgMenuComponent;
  let fixture: ComponentFixture<ErgMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErgMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErgMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
