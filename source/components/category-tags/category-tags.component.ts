import { Component, Input } from '@angular/core';

import { Category } from '../../types/category';

@Component({
	moduleId: module.id,
	selector: 'cm-category-tags',
	templateUrl: 'category-tags.component.html',
	styleUrls: ['category-tags.component.css'],
})
export class CategoryTagListComponent {
	@Input() categories: Category[];
}
