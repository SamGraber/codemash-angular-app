import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Category } from '../shared/category';
import { CategoryService } from '../shared/category.service';

interface ICategoryRouteParams {
	id: number;
}

@Injectable()
export class CategoryResolver implements Resolve<Category> {
	constructor(private categoryService: CategoryService) { }

	resolve(route: ActivatedRouteSnapshot): Observable<Category> {
		return this.categoryService.getCategory((<ICategoryRouteParams>route.params).id);
	}
}
