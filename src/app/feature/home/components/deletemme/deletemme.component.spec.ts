import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemmeComponent } from './deletemme.component';

describe('DeletemmeComponent', () => {
  let component: DeletemmeComponent;
  let fixture: ComponentFixture<DeletemmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletemmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
