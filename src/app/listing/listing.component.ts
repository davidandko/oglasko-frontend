import { Component,Input } from '@angular/core';
import { Listing } from '../types/listing.interface';
@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent {
  @Input() 
  listing!: Listing;
}
