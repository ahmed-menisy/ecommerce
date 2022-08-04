import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  baseUrl: string = `https://fakestoreapi.com/`;
  // ------------------- Get All Products -------------------
  getProducts():Observable<any> {
    return this.http.get(`${this.baseUrl}products`)
  }
  // ------------------- Get Produts Category  ----------------
  getProductsCategory  (keyWord:string): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/${keyWord}`);
  }
  // ------------------- Get All Categories Names
  getCategoriesName():Observable<any> {
    return this.http.get(`${this.baseUrl}products/categories`)
  }
  // ------------------- Get Product By Id -------------------
  getProductById(id:string):Observable<any> {
    return this.http.get(`${this.baseUrl}products/${id}`)
  }
}
