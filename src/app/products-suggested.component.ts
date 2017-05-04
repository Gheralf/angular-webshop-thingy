import { Component, OnInit } from '@angular/core';

import { Product } from './object/product';

@Component({
  moduleId: module.id,
  selector: 'products-suggested',
  templateUrl: 'html/products-suggested.component.html',
  styleUrls: ['css/products-suggested.component.css']
})

export class ProductsSuggestedComponent {
  products: Product[] = [
    new Product(1, "Book", "It's a book", 4, true, ""),
    new Product(2, "Pamphlet", "It's a pamphlet", 2, false, "")
  ]
  
  suggestedProducts: Product[];
}