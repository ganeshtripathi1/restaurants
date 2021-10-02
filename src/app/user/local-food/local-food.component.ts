import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-food',
  templateUrl: './local-food.component.html',
  styleUrls: ['./local-food.component.css']
})
export class LocalFoodComponent implements OnInit {

  localFoodItemCategoryId:number = 2;
  localFoodItem:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getFoodItemByCategory(this.localFoodItemCategoryId);
  }

  getFoodItemByCategory(categoryId: number) {

    this.api.getData('api/Food/getFoodItemByCategory?id=' + categoryId).subscribe(res => {
      this.localFoodItem = res;
    })
  }

}
