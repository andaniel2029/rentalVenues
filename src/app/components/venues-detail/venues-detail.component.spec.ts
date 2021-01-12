import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesDetailComponent } from './venues-detail.component';

describe('VenuesDetailComponent', () => {
  let component: VenuesDetailComponent;
  let fixture: ComponentFixture<VenuesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenuesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
