import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltyComponent } from './salty.component';

describe('SaltyComponent', () => {
  let component: SaltyComponent;
  let fixture: ComponentFixture<SaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaltyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
