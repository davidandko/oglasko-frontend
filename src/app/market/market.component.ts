import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { ListingComponent } from '../listing/listing.component';
import { FormsModule } from '@angular/forms';
import { Listing } from '../types/listing.interface';
import { ListingService } from '../services/listing.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-market',
  standalone: true,
  imports: [NavigationComponent, ListingComponent, FormsModule,NgFor],
  templateUrl: './market.component.html',
  styleUrl: './market.component.css',
})
export class MarketComponent implements OnInit{
  listings: Listing[] = [];
  filteredListings: Listing[] = [];
  selectedPriceFilter: string = ''; 
  selectedCategory: string = ''; 
  searchQuery: string = '';

  constructor(private listingService: ListingService) {}

  ngOnInit() {
    this.listingService.getListings().subscribe((listings) => {
      this.listings = listings;
      this.filterListings();
    });
  }
  onPriceFilterChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedPriceFilter = target?.value ?? '';
  }

  onCategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory = target?.value ?? '';
  }
  onSearchChange() {
    this.filterListings();
  }

  filterListings() {
    
    this.filteredListings = this.listings
      .filter(
        (listing) =>
          !this.selectedPriceFilter ||
          listing.price === this.selectedPriceFilter
      )
      .filter(
        (listing) =>
          !this.selectedCategory ||
          listing.mainCategory === this.selectedCategory
      )
      .filter(
        (listing) =>
          this.searchQuery.trim() === '' ||
          listing.title
            .toLowerCase()
            .includes(this.searchQuery.trim().toLowerCase()) ||
          listing.description
            .toLowerCase()
            .includes(this.searchQuery.trim().toLowerCase())
      );
  }
}
