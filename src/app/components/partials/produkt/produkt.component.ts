import { Component } from '@angular/core';
import { Product } from '../../../Modules/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produkt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produkt.component.html',
  styleUrl: './produkt.component.css'
})
export class ProduktComponent {
  products : Product[] = [
      new Product(1, 'Product 1', 100, 'https://via.placeholder.com/150', 10),
      new Product(2, 'Product 2', 200, 'https://via.placeholder.com/150', 15),
      new Product(3, 'Product 3', 300, 'https://via.placeholder.com/150', 5),
  ]
}
