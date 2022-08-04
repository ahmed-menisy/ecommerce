import {  Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private _CartService: CartService) {}
  numberCount: number = 30;
  cartProducts: any[] = [];
  total: number = 0;
  sendRes: boolean = false;
  loading:boolean = false;
  ngOnInit(): void {
    this.getProductCart();
  }
  // Counter To Create Array Of number
  counter(i: number): Array<number> {
    return new Array(i);
  }
  // Counter Plus To plus The Number +10
  countePlus() {
    this.numberCount += 10;
  }
  // To Get All Cart When Start
  getProductCart(): void {
    if ('CART' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('CART')!);
      // console.log(this.cartProducts);
      this.getPrice();
    }
  }
  // Delete Curent Cart
  deleteCurent(product: any, i: number): void {
    this.cartProducts.splice(i, 1);
    localStorage.setItem('CART', JSON.stringify(this.cartProducts));
    this.getPrice();
  }
  // Delete All Cart
  clearShoping(): void {
    localStorage.removeItem('CART');
    this.cartProducts = [];
    this.getPrice();
  }
  // Change Select
  change(e: any, prod: any, i: number) {
    const curentData = {
      quantity: e.target.value,
      item: prod,
    };
    this.cartProducts.splice(i, 1, curentData);
    localStorage.setItem('CART', JSON.stringify(this.cartProducts));
    this.getPrice();
  }
  //get Total Price
  getPrice(): void {
    this.total = 0;
    this.cartProducts.forEach((item) => {
      this.total += parseFloat(item.item.price) * parseFloat(item.quantity);
    });
  }
  //Add Ordered
  addOrdered(): void {
    this.loading = true;
    const cartObject = {
      userId: 5,
      date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
      products: this.cartProducts.filter((item) => {
        return { productId: item.item.id, quantity: item.quantity };
      }),
    };
    this._CartService.addCart(cartObject).subscribe({
      next: (response) => {
        this.loading = false;
        this.sendRes = true
        console.log('data Come', response);
      },complete:()=> {
        timer(2000).subscribe(()=>{
          this.sendRes = false
        })
        
      }
    });
  }
}
