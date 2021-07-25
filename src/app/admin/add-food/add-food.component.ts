import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { toBase64String } from '@angular/compiler/src/output/source_map';


@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  foodForm:any;
  uploadedImageBaseString:any;
  apiReturnBaseString:any;
  constructor(private fb:FormBuilder,private api:ApiService,private http:HttpClient) {

  http.get("http://localhost:61785/api/My/CheckConnectionToDatabase").subscribe(res=>{
    console.log(res)
  })
   }

  ngOnInit(): void {

    this.foodForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      qty: ['', Validators.required],
      image: ['', Validators.required],
      cid: ['', Validators.required]
    });
  }


  addFoodForm() {
    let data:any;

    let quantity = this.foodForm.get('qty').value;
    let cid:number  = Number(this.foodForm.get('cid').value);

  
    data = {
      name: this.foodForm.value.name,
      description: this.foodForm.value.description,
      qty: quantity,
      isAvailable: true,
      image: this.uploadedImageBaseString,
      cid: cid
    }

    
     console.log(data);

    this.api.postData("api/Food/addFood",data).subscribe(res=>{
    
    
      
      console.log(res);
    })
  }


  UploadImageConversion(event: any) {
    var reader = new FileReader();
    var baseString;
    reader.onloadend = e => {
      baseString = reader.result;
      this.uploadedImageBaseString = baseString;
    }
    reader.readAsDataURL(event.target.files[0]);
  }

}
