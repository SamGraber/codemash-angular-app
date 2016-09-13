import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CategoryService, Category } from '../shared/category.service';

@Component({
	moduleId: module.id,
	selector: 'cm-categories',
	templateUrl: 'category-list.component.html',
})
export class CategoryListComponent implements OnInit {
	categories: Category[];
	visibleCategories: Category[];

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit(): void {
		this.activatedRoute.data.map((x: any) => x.categories).subscribe(categories => {
			this.categories = categories;
			this.visibleCategories = categories;
		});
	}
}
