import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindUserById } from './find-user-by-id';

describe('FindUserById', () => {
  let component: FindUserById;
  let fixture: ComponentFixture<FindUserById>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindUserById]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindUserById);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
