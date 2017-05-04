import { Component, OnInit } from '@angular/core';

import { Product } from './object/product';
import { ProductService } from './product.service';

@Component({
  moduleId: module.id,
  selector: 'products-all',
  templateUrl: 'html/products-all.component.html',
  styleUrls: ['css/products-suggested.component.css'],
  providers: [ ProductService ]
})

export class ProductsAllComponent implements OnInit {
  allProducts: Product[];
  
  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    this.productService.getProducts().then(allProducts => this.allProducts = allProducts);
  }
  
}