import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllUsers } from './find-all-users';

describe('FindAllUsers', () => {
  let component: FindAllUsers;
  let fixture: ComponentFixture<FindAllUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindAllUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindAllUsers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
