import {Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Product } from './object/product';
import { ProductService } from './product.service';

@Component({
  moduleId: module.id,
  selector: 'product',
  templateUrl: 'html/product.component.html'
})

export class ProductComponent implements OnInit {
  product: Product;
  
  constructor(
    private productService: ProductService, 
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(product => this.product = product);
    /* JavaScript(+) operator converts string to a number */
  }

  addToCart(): void {
    this.productService.addProductToCart(this.product);
  }

}