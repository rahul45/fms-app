import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmsComponent } from './fms.component';

describe('FmsComponent', () => {
  let component: FmsComponent;
  let fixture: ComponentFixture<FmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
