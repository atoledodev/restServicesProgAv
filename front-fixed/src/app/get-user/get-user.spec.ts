import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUser } from './get-user';

describe('GetUser', () => {
  let component: GetUser;
  let fixture: ComponentFixture<GetUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
