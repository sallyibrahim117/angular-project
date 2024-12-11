import { ProductServiceService } from './../../../../Services/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
carts:any[]=[];
// cartsNum:any
  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    if('cart'in localStorage){
      this.carts= JSON.parse(localStorage.getItem("cart"))
    }
    console.log(this.carts);

    // this.productService.cartNumber.subscribe((num:number)=>{
    //     this.cartsNum=num
    //  })
  }


}
