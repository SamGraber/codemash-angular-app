import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CategoryService, Category } from '../shared/category.service';

@Component({
	moduleId: module.id,
	selector: 'cm-categories',
	templateUrl: 'category-list.component.html',
})
export class CategoryListComponent implements OnInit {
	categories: Observable<Category[]>;

	constructor(private categoryService: CategoryService) { }

	ngOnInit(): void {
		this.categories = this.categoryService.getCategories();
	}
}
