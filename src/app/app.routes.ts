import { Routes } from '@angular/router';
import { MarketComponent } from './market/market.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'market', component: MarketComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent}
];
