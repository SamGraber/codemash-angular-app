import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CategoryService, Category } from '../shared/category.service';

@Injectable()
export class CategoryListResolver implements Resolve<Category[]> {
	constructor(private categoryService: CategoryService) { }

	resolve(): Observable<Category[]> {
		return this.categoryService.getCategories();
	}
}
