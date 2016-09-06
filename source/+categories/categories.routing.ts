import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';

const categoryRoutes: Routes = [
	{
		path: '',
		component: CategoryListComponent,
	},
];

export const categoryRouting: any = RouterModule.forChild(categoryRoutes);
