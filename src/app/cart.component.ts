import { Component, OnInit } from '@angular/core';
import {Product} from "./object/product";
import {ProductService} from "./product.service";
import {Subscription} from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'show-cart',
  templateUrl: 'html/cart.component.html'
})

export class CartComponent {

  constructor( private productService: ProductService ) {}

  subscription:Subscription;
  public cart: Product[] = []; //JSON.parse(localStorage.getItem('owlcart'));

  ngOnInit() {
    this.subscription = this.productService.cartitems$
      .subscribe(cart => this.cart = cart)
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

  public removeProductFromCart(product: Product): void {
    this.productService.removeProductFromCart(product);
  }

  clearCart(): void {
    this.productService.clearCart();
  }

}