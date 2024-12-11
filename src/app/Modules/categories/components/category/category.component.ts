import { CategoryService } from './../../../../Services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  myCategory:any[]=[]
  loading:boolean=false
  constructor(private category:CategoryService) { }

  ngOnInit(): void {
    this.getCategory()

  }
getCategory(){
  this.loading=true
  this.category.getCategory().subscribe({
    next:(res:any)=>{
      this.loading=false
      this.myCategory=res},
    error:(err:any)=>{this.loading=false},
    complete:()=>{}
  })
}
filterCategory(event:any){
 let value=event.target.value
 this.getProductincategory(value)
 console.log(value);

}
getProductincategory(keyword:any){
  this.loading=true
  this.category.getProductcategory(keyword).subscribe({
    next:(res:any)=>{
      this.loading=false
      this.myCategory=res},
    error:(err:any)=>{this.loading=false},
    complete:()=>{}
  })
}
}
