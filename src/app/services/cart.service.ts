import { Injectable } from '@angular/core';
import { Listing } from '../types/listing.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Listing[] = [];

  constructor() { }

  addToCart(item: Listing) {
    this.cartItems.push(item);
  }
  removeFromCart(item: Listing){
    for(let i=0;i<this.cartItems.length;i++){
      if(this.cartItems[i].title == item.title && this.cartItems[i].phoneNumber == item.phoneNumber && this.cartItems[i].owner == item.owner){
        this.cartItems.splice(i,1);
      }
    }
  }
  getCartItems() {
    return this.cartItems;
  }

  
}