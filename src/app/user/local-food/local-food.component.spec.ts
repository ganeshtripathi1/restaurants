import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalFoodComponent } from './local-food.component';

describe('LocalFoodComponent', () => {
  let component: LocalFoodComponent;
  let fixture: ComponentFixture<LocalFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
