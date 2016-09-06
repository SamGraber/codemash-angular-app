import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category/category.component';

export interface ICategoryDetailParams {
	id: number;
}

const categoryRoutes: Routes = [
	{
		path: '',
		component: CategoryListComponent,
	},
	{
		path: ':id',
		component: CategoryComponent,
	},
];

export const categoryRouting: any = RouterModule.forChild(categoryRoutes);
