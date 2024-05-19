import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient);

  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
      .pipe(map((res:any)=>{
        return res;
      }))
  }
}
