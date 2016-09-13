import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from '../category-list/category-list.component';
import { CategoryComponent } from '../category/category.component';

import { CategoryListResolver } from './category-list.resolver';
import { CategoryResolver } from './category.resolver';

export interface ICategoryDetailParams {
	id: number;
}

const categoryRoutes: Routes = [
	{
		path: '',
		component: CategoryListComponent,
		resolve: {
			categories: CategoryListResolver,
		},
	},
	{
		path: ':id',
		component: CategoryComponent,
		resolve: {
			category: CategoryResolver,
		},
	},
];

export const categoryRouting: any = RouterModule.forChild(categoryRoutes);
