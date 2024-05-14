import { Component } from '@angular/core';
import { HeaderComponent } from '../../partials/header/header.component';
import { ProduktComponent } from '../../partials/produkt/produkt.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProduktComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
