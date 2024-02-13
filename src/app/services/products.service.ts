import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'localhost:3000/products';
   
  constructor(private httpClient: HttpClient) { }
  
  
}