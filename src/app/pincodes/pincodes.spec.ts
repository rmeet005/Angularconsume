import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pincodes } from './pincodes';

describe('Pincodes', () => {
  let component: Pincodes;
  let fixture: ComponentFixture<Pincodes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pincodes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pincodes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
