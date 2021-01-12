import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVenuesComponent } from './add-venues.component';

describe('AddVenuesComponent', () => {
  let component: AddVenuesComponent;
  let fixture: ComponentFixture<AddVenuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVenuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
