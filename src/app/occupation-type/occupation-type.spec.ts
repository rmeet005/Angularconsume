import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationType } from './occupation-type';

describe('OccupationType', () => {
  let component: OccupationType;
  let fixture: ComponentFixture<OccupationType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OccupationType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupationType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
