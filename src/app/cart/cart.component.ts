import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Listing } from '../types/listing.interface';
import { NavigationComponent } from '../navigation/navigation.component';
import { ListingComponent } from '../listing/listing.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports:[NavigationComponent,ListingComponent,NgFor],
  standalone: true,
})
export class CartComponent implements OnInit {
  cartItems: Listing[] = [];
  total: number =0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }
  calculateTotal(){
    this.cartItems.forEach(list => this.total+=parseInt(list.price));
    return this.total;
  }
}