import { Injectable } from '@angular/core';
import {Product} from "../Modules/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = []; // Array of products in cart

  addToCart(product: Product) {
    if (product.stock > 0) {
      this.cart.push(product);
      console.log(`Produkt: ${product.name} dodany do koszyka`);
      product.stock--;
    } else
      alert("Brak produktu w magazynie");
  }

  removeFromCart(product: Product) {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
      console.log(`Produkt: ${product.name} usunięty z koszyka`);
      product.stock++;
    }
    else
      console.log("Koszyk jest pusty!");
  }

  getCart() {
    return this.cart; // Zwraca tablicę produktów w koszyku
  }

  getTotal() {
    return this.cart.reduce((total, product) =>
      total + product.price, 0)
  }
}
