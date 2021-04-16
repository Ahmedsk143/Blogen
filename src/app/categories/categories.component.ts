import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories = this.catService.getCategories();
  constructor(private catService: CategoriesService) {}

  ngOnInit(): void {
    console.log(this.categories);
  }
}
