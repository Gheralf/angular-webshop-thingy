import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Product } from './object/product';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ProductService {
  private productsUrl = 'api/products';

  public cart: Product[] = [];

  private testcart = new BehaviorSubject<Product[]>(this.cart);
  cartitems$ = this.testcart.asObservable();

  constructor(private http: Http) { }

  addProductToCart(product: Product): void {
    this.cart.push(product);
    this.testcart.next(this.cart);
  }

  clearCart(): void {
    this.cart = [];
    this.testcart.next(this.cart);
  }

  removeProductFromCart(product: Product): void {
    this.cart.splice(this.cart.indexOf(product), 1);
  }



  getProducts(): Promise<Product[]> {
    return this.http.get(this.productsUrl)
      .toPromise()
      .then(response => response.json().data as Product[])
      .catch(this.handleError);
  }

  getProduct(id: number): Promise<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Product)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // TODO actual error
    return Promise.reject(error.message || error);
  }

}