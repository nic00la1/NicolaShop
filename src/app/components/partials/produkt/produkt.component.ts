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
      new Product(1, 'Słuchawki JBL', 100, 'https://sklep.hard-pc.pl/galerie/s/sluchawki-bezprzewodowe-picun_40292.jpg', 10),
      new Product(2, 'Klawiatura Asus', 300, 'https://delkom.pl/pic3/9CEA/352168/klawiatura-mechaniczna-asus-rog-falchion-ace-90mp0346-bkua11-nx-red-rgb-compact-biala-png-720x.png', 15),
      new Product(3, 'Myszka Razer', 250, 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107701201?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320', 5),
  ]
}
