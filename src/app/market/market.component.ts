import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { ListingComponent } from '../listing/listing.component';
import { FormsModule } from '@angular/forms';
import { Listing } from '../types/listing.interface';
import { Account } from '../types/account.interface';
import { ListingService } from '../services/listing.service';
import { AccountService } from '../services/account.service';
import { CategoryService } from '../services/category.service';
import { NgFor } from '@angular/common';
import { Category } from '../types/category.interface';
import { PopupComponent } from '../popup/popup.component';
@Component({
  selector: 'app-market',
  standalone: true,
  imports: [
    PopupComponent,
    NavigationComponent,
    ListingComponent,
    FormsModule,
    NgFor,
  ],
  templateUrl: './market.component.html',
  styleUrl: './market.component.css',
})
export class MarketComponent implements OnInit {
  listings: Listing[] = [];
  accounts: Account[] = [];
  categories: Category[] = [];
  filteredListings: Listing[] = [];
  selectedPriceFilter: string = '';
  selectedCategory: string = '';
  selectedSubcategory: string = '';
  searchQuery: string = '';
  subcatSearch!: Category;

  constructor(
    private listingService: ListingService,
    private accountService: AccountService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.listingService.getListings().subscribe((listings) => {
      this.listings = listings;
      this.filterListings();
    });
    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
  onPriceFilterChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedOption = target.value;

    // Sort filteredListings based on selected option
    if (selectedOption === 'priceAsc') {
      this.filteredListings.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    } else if (selectedOption === 'priceDsc') {
      this.filteredListings.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    } else if (selectedOption === 'dateNewest') {
      this.filteredListings.sort(
        (a, b) =>
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      );
    } else if (selectedOption === 'dateOldest') {
      this.filteredListings.sort(
        (a, b) =>
          new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
      );
    }
  }

  onCategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedCategory = target.value;

    if (selectedCategory) {
      this.filteredListings = this.listings.filter(
        (listing) => listing.mainCategory === selectedCategory
      );
    } else {
      this.filteredListings = this.listings;
    }

    this.selectedSubcategory = '';
  }
  onSearchChange() {
    this.filterListings();
  }
  onSubcategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedSubcategory = target.value;

    if (selectedSubcategory) {
      this.filteredListings = this.listings.filter((listing) =>
        listing.subCategory.includes(selectedSubcategory)
      );
    } else {
      if (this.selectedCategory) {
        this.filteredListings = this.listings.filter(
          (listing) => listing.mainCategory === this.selectedCategory
        );
      } else {
        this.filteredListings = this.listings;
      }
    }
  }
  getSubcategories(category: string): string[] {
    const selectedCategory = this.categories.find(
      (cat) => cat.title === category
    );
    return selectedCategory ? selectedCategory.subcategories : [];
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
          !this.selectedSubcategory ||
          listing.subCategory.forEach(
            (subcat) => this.selectedSubcategory === subcat
          )
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
  count: number = 0;

  recieveValue(value: number) {
    this.count = value;
  }
}
