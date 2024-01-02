import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyLoaderComponent } from './empty-loader.component';

describe('EmptyLoaderComponent', () => {
  let component: EmptyLoaderComponent;
  let fixture: ComponentFixture<EmptyLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
