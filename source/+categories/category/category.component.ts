import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CategoryService, Category } from '../shared/category.service';
import { ICategoryDetailParams } from '../categories.routing';

@Component({
	moduleId: module.id,
	selector: 'cm-category',
	templateUrl: 'category.component.html',
})
export class CategoryComponent implements OnInit {
	category: Category;

	constructor(private categoryService: CategoryService
			, private activatedRoute: ActivatedRoute) { }

	ngOnInit(): void {
		this.activatedRoute.params.map((params: ICategoryDetailParams) => params.id)
								  .switchMap(id => this.categoryService.getCategory(id))
								  .subscribe(category => this.category = category);
	}
}
