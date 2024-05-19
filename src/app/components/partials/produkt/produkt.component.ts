import {Component, inject} from '@angular/core';
import { Product } from '../../../Shared/Modules/Product';
import { CommonModule } from '@angular/common';
import {CartService} from "../../../services/cart.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-produkt',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produkt.component.html',
  styleUrl: './produkt.component.css'
})
export class ProduktComponent {
  products : Product[] = [
      new Product(1, 'Słuchawki JBL', 100, 'https://sklep.hard-pc.pl/galerie/s/sluchawki-bezprzewodowe-picun_40292.jpg', 10),
      new Product(2, 'Klawiatura Asus', 300, 'https://delkom.pl/pic3/9CEA/352168/klawiatura-mechaniczna-asus-rog-falchion-ace-90mp0346-bkua11-nx-red-rgb-compact-biala-png-720x.png', 15),
      new Product(3, 'Myszka Razer', 250, 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107701201?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320', 5),
  ]
  quantity: number = 1;

  cartService = inject(CartService);

  addToCart(product: Product, quantity: number) {
    // Check if the quantity requested is available in stock
    if (product.stock < quantity) {
      console.error(`Requested quantity for product ${product.name} is not available in stock.`);
      return;
    }
    // Check if the product is already in the cart
    const item = this.cartService.getCart().find(item => item.product.id === product.id);
    if (item) {
      // If the product is already in the cart, update the quantity
      item.quantity += quantity;
    } else {
      // If the product is not in the cart, add it
      this.cartService.addToCart(product, quantity);
    }

    // Update the stock of the product
    product.stock -= quantity;
  }

  removeFromCart(product: Product, quantity: number) {
    const item = this.cartService.getCart().find(item => item.product.id === product.id);
    if (item) {
      // Check if the quantity to remove is less than or equal to the quantity in the cart
      if (item.quantity >= quantity) {
        // If it is, update the quantity
        item.quantity -= quantity;
        // If the quantity in the cart is 0, remove the product from the cart
        if (item.quantity === 0) {
          this.cartService.removeFromCart(item);
        }
      } else {
        console.error(`Requested quantity to remove for product ${product.name} is greater than quantity in the cart.`);
      }

      // Update the stock of the product
      product.stock += quantity;
    }
  }
}
