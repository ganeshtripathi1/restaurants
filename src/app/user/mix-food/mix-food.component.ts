import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mix-food',
  templateUrl: './mix-food.component.html',
  styleUrls: ['./mix-food.component.css']
})
export class MixFoodComponent implements OnInit {

  mixFoodData:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getDummyDataForFoodListings();
  }



  getDummyDataForFoodListings()
  {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(res=>{
      this.mixFoodData = res;
      console.log(this.mixFoodData)
    })
  }
}
