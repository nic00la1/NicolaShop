import {Component, inject} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {Product} from "../../../Shared/Modules/Product";
import {CartItem} from "../../../Shared/Interfaces/cart-item";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: CartItem[] = [];
  cartService = inject(CartService);
  ngOnInit() {
    this.cartItems = this.cartService.getCart();
  }

  removeFromCart(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

  cartValue() {
    return this.cartService.getTotal();
  }

  clearCart() {
    this.cartService.clearCart();
  }

  checkout() {
    this.cartService.checkout();
  }
}
