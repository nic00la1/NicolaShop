import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public totalQuantity = new BehaviorSubject<number>(0);
  public totalPrice = new BehaviorSubject<number>(0);
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
    this.updateCartTotals();
  }
  addtoCart(product : any){
    const cartItem = this.cartItemList.find((item : any) => {
      return item.id === product.id;
    });

    if (cartItem) {
      if (cartItem.quantity + 1 > product.stock) {
        alert('Nie ma tyle produktów na magazynie');
        return;
      }
      cartItem.quantity += 1;
    } else {
      if (product.stock < 1) {
        alert('Nie ma tyle produktów na magazynie');
        return;
      }
      this.cartItemList.push({...product, quantity: 1});
    }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.price * a.quantity;
    })
    return grandTotal;
  }

  updateCartTotals() {
    this.totalQuantity.next(this.cartItemList.reduce((acc : any, item:any) => acc + item.quantity, 0));
    this.totalPrice.next(this.cartItemList.reduce((acc:any, item:any) => acc + item.price * item.quantity, 0));
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
    this.updateCartTotals();
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
    this.updateCartTotals();
  }
}
