import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from '../types/listing.interface';
@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private listingsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(this.listingsUrl);
  }
}