import {Injectable} from '@angular/core';
import {of} from "rxjs";
import products from '../../assets/products.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getProduct() {
    return of(products);
  }
}
