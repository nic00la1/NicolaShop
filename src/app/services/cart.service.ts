import { Injectable } from '@angular/core';
import {Product} from "../Shared/Modules/Product";
import {CartItem} from "../Shared/Interfaces/cart-item";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartItem[] = []; // Array of cart items

  addToCart(product: Product, quantity: number) {
    const item = this.cart.find(item => item.product.id === product.id);
    if (product.stock > quantity) {
      if (item) {
        item.quantity += quantity;
      } else {
        this.cart.push({ product, quantity });
      }
      console.log(`Produkt: ${product.name} dodany do koszyka`);
      product.stock -= quantity;
    }
  }

  removeFromCart(item: CartItem) {
    const index = this.cart.indexOf(item);
    if (index > -1) {
      this.cart.splice(index, 1);
      item.product.stock += item.quantity;
    }
  }

  getCart() {
    return this.cart; // Returns array of cart items
  }

  getTotal() {
    return this.cart.reduce((total, item) =>
      total + item.quantity, 0)
  }

  clearCart() {
    this.cart = [];
  }

  checkout() {
    // Send cart to server
    console.log('Zamówienie złożone');
    this.clearCart();
  }
}
