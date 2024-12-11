import { ProductServiceService } from './../../../../Services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
proid:number;
productDetails:any
  constructor(private activeRoute:ActivatedRoute,private detailsService:ProductServiceService) { }

  ngOnInit(): void {
    console.log(this.activeRoute);
this.proid=+this.activeRoute.snapshot.params.id
console.log(this.proid);
this.  getDetails()
  }
  getDetails(){
    this.detailsService.getProductdetails(this.proid).subscribe({
      next:(res:any)=>{this.productDetails=res},
      error:(err:any)=>{},
      complete:()=>{}
    })
  }

}
