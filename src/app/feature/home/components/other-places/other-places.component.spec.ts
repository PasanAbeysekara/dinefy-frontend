import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPlacesComponent } from './other-places.component';

describe('OtherPlacesComponent', () => {
  let component: OtherPlacesComponent;
  let fixture: ComponentFixture<OtherPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
