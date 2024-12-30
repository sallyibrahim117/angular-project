import { ProductServiceService } from './../Services/product-service.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../Modules/products/interfaces/iproduct';
import { CategoryService } from '../Services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myCategory:any[]=[]
  product:Iproduct
  loading:boolean=false
  cartProducts:any[]=[]
  constructor(private category:CategoryService,private toastr:ToastrService
    ,private productService:ProductServiceService
    ) { }

  ngOnInit(): void {
    this.getCategory()
this.getLimitedPro()
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
    getLimitedPro(){
  this.loading=true
   this.productService.getLimitedPro().subscribe({
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

}



