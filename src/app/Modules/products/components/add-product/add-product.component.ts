import { ToastrService } from 'ngx-toastr';
import { ProductServiceService } from './../../../../Services/product-service.service';
import { CategoryService } from './../../../../Services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
[x: string]: any;
categories:any[]=[]
  constructor(private fb:FormBuilder,private categoryService:CategoryService,
    private productService:ProductServiceService,
     private toastr:ToastrService) { }
  myForm:FormGroup=this.fb.group({
    title:['',[Validators.required ,
      Validators.pattern( /^[A-Za-z]+$/)]],
      price:['',[Validators.required]],
      description:['',[Validators.required,
    Validators.minLength(5),Validators.maxLength(100)]],
    // category:['',[Validators.required]]
  }
 )
 get formControlls():any{
  return this.myForm.controls;
}
  ngOnInit(): void {
    // this.getCategory()
  }
  // getCategory(){
  //   this.category.getCategory().subscribe({
  //     next:(res:any)=>{this.categories=res},
  //     error:(err:any)=>{},
  //     complete:()=>{}
  //   })
  // }
  // filterCategory(event:any){
  //   this.form.get('category').setValue(event)
  // }

  addproducts() {
    let data:any={
      "title": this.myForm.value.title,
      "price": this.myForm.value.price,
      "description": this.myForm.value.description,
      // "categoryId": this.myForm.value.category,
      // "images": "string"
    }
    this.productService.addProduct(data).subscribe({
      next: (res: any) => {
        if(res){
          // this.toastr.info('form submitted', 'info');
          this.myForm.reset()
        }
      },
      error: () => {},
      complete: () => {},
    });

  }
  submit(){
    if (this.myForm.valid){
      this.addproducts()
      this.toastr.success('well!,form submitted', 'hi');
      // alert("well")
      console.log(this.myForm);
      console.log(this.myForm.value);
    }
    else {
this.myForm.markAllAsTouched();
    }


  }

}
