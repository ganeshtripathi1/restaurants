import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chinese-food',
  templateUrl: './chinese-food.component.html',
  styleUrls: ['./chinese-food.component.css']
})
export class ChineseFoodComponent implements OnInit {

  chinesFoodCategoryId:number =1;
  chinesFoodItems:any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getFoodItemByCategory(this.chinesFoodCategoryId);
  }


  getFoodItemByCategory(categoryId:number)
  {

    this.api.getData('api/Food/getFoodItemByCategory?id='+categoryId).subscribe(res=>{
      this.chinesFoodItems = res;
    })
  }

}
