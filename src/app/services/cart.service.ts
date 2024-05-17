import { Injectable } from '@angular/core';
import {Product} from "../Shared/Modules/Product";
import {CartItem} from "../Shared/Interfaces/cart-item";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartItem[] = []; // Array of cart items

  addToCart(product: Product) {
    const item = this.cart.find(item => item.product.id === product.id);
    if (product.stock > 0) {
      if (item) {
        item.quantity++;
      } else {
        this.cart.push({ product, quantity: 1 });
      }
      console.log(`Produkt: ${product.name} dodany do koszyka`);
      product.stock--;
    }
  }

  removeFromCart(product: Product) {
    const item = this.cart.find(item => item.product.id === product.id);
    if (item) {
      item.quantity--;
      if (item.quantity === 0) {
        const index = this.cart.indexOf(item);
        this.cart.splice(index, 1);
      }
      product.stock++;
    }
  }

  getCart() {
    return this.cart; // Returns array of cart items
  }

  getTotal() {
    return this.cart.reduce((total, item) =>
      total + item.product.price * item.quantity, 0)
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
