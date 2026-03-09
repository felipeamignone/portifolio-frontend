import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardColapse } from './card-colapse';

describe('CardColapse', () => {
  let component: CardColapse;
  let fixture: ComponentFixture<CardColapse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardColapse],
    }).compileComponents();

    fixture = TestBed.createComponent(CardColapse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
