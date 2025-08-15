import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectionReason } from './rejection-reason';

describe('RejectionReason', () => {
  let component: RejectionReason;
  let fixture: ComponentFixture<RejectionReason>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejectionReason]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectionReason);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
