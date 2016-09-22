import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CategoryService, Category } from '../shared/category.service';
import { ICategoryDetailParams } from '../routing/categories.routing';

@Component({
	moduleId: module.id,
	selector: 'cm-category',
	templateUrl: 'category.component.html',
})
export class CategoryComponent implements OnInit {
	category: Category;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit(): void {
		this.activatedRoute.data.map((x: any) => x.category).subscribe(category => {
			this.category = category;
		});
	}
}
