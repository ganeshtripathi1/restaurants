import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLocalFoodComponent } from './manage-local-food.component';

describe('ManageLocalFoodComponent', () => {
  let component: ManageLocalFoodComponent;
  let fixture: ComponentFixture<ManageLocalFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageLocalFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLocalFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
