import { ApiService } from './../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mix-food',
  templateUrl: './mix-food.component.html',
  styleUrls: ['./mix-food.component.css']
})
export class MixFoodComponent implements OnInit {

  mixFoodData:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
   this.getAllFoodItems();
  }


getAllFoodItems()
{
this.api.getData("api/Food/getallfooditems").subscribe(res=>{
 this.mixFoodData = res;
});
}
 
}
