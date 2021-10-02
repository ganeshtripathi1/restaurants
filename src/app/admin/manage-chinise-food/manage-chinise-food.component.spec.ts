import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageChiniseFoodComponent } from './manage-chinise-food.component';

describe('ManageChiniseFoodComponent', () => {
  let component: ManageChiniseFoodComponent;
  let fixture: ComponentFixture<ManageChiniseFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageChiniseFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageChiniseFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
