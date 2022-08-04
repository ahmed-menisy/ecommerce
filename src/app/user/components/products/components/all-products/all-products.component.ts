import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  constructor(private _ProductService: ProductService) {}
  products!: Partial<Product>[];
  categoriesName: string[] = [];
  isLoding: boolean = false;
  cartData: any[] = [];
  ngOnInit(): void {
    this.getProducts(); // Call  All Product
    this.getCategoriesName(); // Call Cat Name
  }
  // --------------- Get All Products
  getProducts(): void {
    this.isLoding = true;
    this._ProductService.getProducts().subscribe({
      next: (response: Partial<Product>[]) => {
        // console.log(response);
        this.products = response;
      },
      error: (e: Error) => {
        // console.log(e);
      },
      complete: () => {
        this.isLoding = false;
      },
    });
  }
  // --------------- Track By
  trackByProd(index: number, products: any): number {
    return products.index;
  }
  // --------------- Get All Categories Names
  getCategoriesName(): void {
    this._ProductService.getCategoriesName().subscribe({
      next: (response) => {
        this.categoriesName = response;
      },
      // complete: () => {
      //   this.getAllProductsAndSpecific((this.curentCategories = 'products'));
      // },
    });
  }
  // --------------- Set Filter Categories
  filterCategories(e: any): void {
    const categoriesValue = e.target.value;
    categoriesValue === 'All Categories'
      ? this.getProducts()
      : this.getProductsCategories(categoriesValue);
  }
  // --------------- Get all-products categories
  getProductsCategories(keyWord: string): void {
    this.isLoding = true;
    this._ProductService.getProductsCategory(keyWord).subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (e: Error) => {
        // console.log(e);
      },
      complete: () => {
        this.isLoding = false;
      },
    });
  }
  // --------------- Add To Cart
  addToCart(event: any): void {
    if ('CART' in localStorage) {
      this.cartData = JSON.parse(localStorage.getItem('CART')!);
      const exite = this.cartData.find((item) => item.item.id == event.item.id);
      if (exite) {
        const eventIndex = this.cartData.find((item) => {
          if (item.item.id == event.item.id) {
            return item;
          }
        });
        // alert('Cart Already Aded');
        this.cartData.splice(this.cartData.indexOf(eventIndex), 1, event);
        localStorage.setItem('CART', JSON.stringify(this.cartData));
      } else {
        this.cartData.push(event);
        localStorage.setItem('CART', JSON.stringify(this.cartData));
      }
    } else {
      this.cartData.push(event);
      localStorage.setItem('CART', JSON.stringify(this.cartData));
    }
  }
}
