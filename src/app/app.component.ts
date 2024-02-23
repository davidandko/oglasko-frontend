import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MarketComponent } from './market/market.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { CartComponent } from './cart/cart.component';
import { PopupComponent } from './popup/popup.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MarketComponent,HomeComponent,ListingComponent,CartComponent,PopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'oglasko-ng';

  
}
