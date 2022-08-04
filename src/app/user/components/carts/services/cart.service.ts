import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) { }
  addCart(cartObject:object):Observable<any> {
    return this.http.post(`${environment.baseUrl}carts`,cartObject)
  }
}
