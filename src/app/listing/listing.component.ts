import { Component,Input, Output } from '@angular/core';
import { Listing } from '../types/listing.interface';
import { CartService } from '../services/cart.service';
import { NgIf } from '@angular/common';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [NgIf],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent {
  count: number = 0;
  @Input() 
  listing!: Listing;
  
  constructor(private readonly cartService:CartService){};
  @Output() 
  countEvent: EventEmitter<number> = new EventEmitter<number>();


  
  @Input()
  route?: string;

  sendValueToParent(): void {
    this.countEvent.emit(this.count);
  }
  addToCart(listing: Listing) {
    this.cartService.addToCart(listing);
    this.count++;
    this.sendValueToParent();
  }
  removeFromCart(listing:Listing){
    this.cartService.removeFromCart(listing);
  }
}
