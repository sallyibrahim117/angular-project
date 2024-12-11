import { Iproduct } from './../../interfaces/iproduct';
import { ProductServiceService } from './../../../../Services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
product:Iproduct
categories:any[]=[]
cartProducts:any[]=[]
loading:boolean=false;
  constructor(private productService:ProductServiceService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllproducts();
    this.getcategories();

  }
getAllproducts(){
  this.loading=true
   this.productService.getAllproducts().subscribe({
    next:(res:any)=>{
      this.loading=false
    res.forEach(element => {
      element['isAddedToChart']=false
    });
      this.product=res;

    },
    error:(err:any)=>{
      this.loading=false
      this.toastr.error(err.message, 'Error');
    },
    complete:()=>{}
  })
}
getcategories(){
  this.loading=true
  this.productService.getcategory().subscribe({
   next:(res:any)=>{
    this.loading=false
    console.log(res)
    this.categories=res},
   error:(err:any)=>{
    this.loading=false
   },
   complete:()=>{}
 })
}
filterCategory(event:any){
  let value=event.target.value
  this.getProductincategory(value)
  console.log(value);

 }
 getProductincategory(keyword:string){
  this.loading=true
  this.productService.getProductcategory(keyword).subscribe({
    next:(res:any)=>{
      this.loading=false
      this.product=res},
    error:(err:any)=>{this.loading=false},
    complete:()=>{}
  })
}
addTocart(event:any){
console.log(this.cartProducts);
console.log("cart" in localStorage);

if ("cart" in localStorage){
// localStorage.getItem('cart')
console.log(this.cartProducts);
console.log(localStorage.getItem("cart"));
console.log(JSON.parse(localStorage.getItem("cart")));

 this.cartProducts= JSON.parse(localStorage.getItem("cart"));
console.log(event);

 let exist=this.cartProducts.find((item) => item.id==event.id)
 console.log(exist);

 if (exist){
  this.toastr.info('This item added before', 'Info');
 }else{

   this.cartProducts.push(event)
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
 }
}
else{
  this.cartProducts.push(event)
  localStorage.setItem("cart",JSON.stringify(this.cartProducts))
}
this.productService.cartNumber.next(this.cartProducts.length)
}
}
