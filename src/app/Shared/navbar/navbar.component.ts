import { ProductServiceService } from './../../Services/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
cartsNum=0
isshowMenu=false;
  constructor(
    private productService:ProductServiceService
  ) { }

  ngOnInit(): void {
    if('cart' in localStorage){
      let arr=JSON.parse(localStorage.getItem("cart"));
      // this.cartsNum= JSON.parse(localStorage.getItem("cart")).length;
  // JSON.parse(localStorage.getItem("cart")).length;
  console.log(

this.cartsNum
  );

    }
    this.productService.cartNumber.subscribe((num:number)=>{
      this.cartsNum=num
    })
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    if('cart' in localStorage){
      let arr=JSON.parse(localStorage.getItem("cart"));
      // this.cartsNum= JSON.parse(localStorage.getItem("cart")).length;
  // JSON.parse(localStorage.getItem("cart")).length;
  this.cartsNum=arr.length}
  }
  show(){
this.isshowMenu=!this.isshowMenu

  }

}
