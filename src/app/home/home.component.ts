import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { CategoryService } from '../services/category.service';
import { Category } from '../types/category.interface';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
categories: Category[] = [];

constructor(
  private categoryService: CategoryService) {}

ngOnInit() {
  this.categoryService.getCategories().subscribe((categories) =>{
    this.categories = categories;
  });
}
}
