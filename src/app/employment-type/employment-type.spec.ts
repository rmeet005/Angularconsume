import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentType } from './employment-type';

describe('EmploymentType', () => {
  let component: EmploymentType;
  let fixture: ComponentFixture<EmploymentType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploymentType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploymentType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
