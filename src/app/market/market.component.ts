import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { ListingComponent } from '../listing/listing.component';


@Component({
  selector: 'app-market',
  standalone: true,
  imports: [NavigationComponent,ListingComponent],
  templateUrl: './market.component.html',
  styleUrl: './market.component.css'
})
export class MarketComponent {

}
