import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import * as myGlobals from './share/global';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllCategory() {
    return this.http.get(myGlobals.baseURL + 'Product/getAllCategory');
  }
  modifyProduct(product) {
    let Url = 'Product/ModifyProduct'
    const params = new HttpParams().set('Category', product.category).set('ImageURL', product.imgURL).set('Price', product.price).set('ProductName', product.title);
    return this.http.post(myGlobals.baseURL + Url, params);
  }
}
