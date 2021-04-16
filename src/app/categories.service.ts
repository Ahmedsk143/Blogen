import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categories = [
    'Web Development',
    'Tech Gadgets',
    'Business',
    'Health & Wellness',
    ' Fashion',
    'Travel',
    'Fitness',
    'Sports',
    'Finance',
    'Political ',
  ];
  constructor() {}
  getCategories() {
    console.log(this.categories);
    return this.categories;
  }
}
