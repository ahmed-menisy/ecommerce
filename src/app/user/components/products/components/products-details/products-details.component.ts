import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
  constructor(
    private _ProductService: ProductService,
    private active: ActivatedRoute
  ) {}
  product!: Partial<Product>;
  curentId!: string;
  ngOnInit(): void {
    this.curentId = this.active.snapshot.params['id'];
    this.getProductById();
  }
  // --------------- Get Product By ID
  getProductById(): void {
    this._ProductService.getProductById(this.curentId).subscribe({
      next: (response: Partial<Product>) => {
        // console.log(response);
        this.product = response;
      },
    });
  }
}
