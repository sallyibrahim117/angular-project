import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  getCategory():Observable<any>{
    return this.http.get(`${environment.url}/products/categories`)
  }
  getProductcategory(keyword):Observable<any>{
    return this.http.get(`${environment.url}/products/category/${keyword}`)
  }
}















