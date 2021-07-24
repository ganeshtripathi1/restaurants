import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixFoodComponent } from './mix-food.component';

describe('MixFoodComponent', () => {
  let component: MixFoodComponent;
  let fixture: ComponentFixture<MixFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
