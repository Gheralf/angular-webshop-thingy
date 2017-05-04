import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Product } from './object/product';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ProductService {
  private productsUrl = 'api/products';
  //private cartName = 'owlcart'; // TODO put in a config file?

  public cart: Product[] = [];

  private testcart = new BehaviorSubject<Product[]>(this.cart);
  cartitems$ = this.testcart.asObservable();

  //JSON.parse(localStorage.getItem(this.cartName))

  constructor(private http: Http) { }

  addProductToCart(product: Product): void {
    //localStorage.owlcart = JSON.stringify(this.cart);
    //localStorage.setItem(this.cartName, JSON.stringify(this.cart));
    this.cart.push(product);
    this.testcart.next(this.cart);
  }

  clearCart(): void {
    //localStorage.removeItem(this.cartName);
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
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}