import { ProductServiceService } from './../../Services/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
cartsNum=0
  constructor(
    private productService:ProductServiceService
  ) { }

  ngOnInit(): void {
    this.productService.cartNumber.subscribe((num:number)=>{
      this.cartsNum=num
    })
  }

}
