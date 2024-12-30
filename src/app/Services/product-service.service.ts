// import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
// cartNumber=new Subject<number>();
cartNumber=new BehaviorSubject<number>(0);
  constructor(private http:HttpClient
  ) {

  }
  getAllproducts():Observable<any>{
    return this.http.get(`${environment.url}/products`)
  }
  getProductdetails(proid:number):Observable<any>{
    return this.http.get(`${environment.url}/products/${proid}`)
  }
  getcategory():Observable<any>{
    return this.http.get(`${environment.url}/products/categories`)
  }
  getProductcategory(keyword:string):Observable<any>{
    return this.http.get(`${environment.url}/products/category/${keyword}`)
  }
  addProduct(data:any):Observable<any>{
    return  this.http.post(`${environment.url}/products`,data)
   }
   getLimitedPro():Observable<any>{
    return this.http.get(`${environment.url}/products?limit=3`)
  }
}
