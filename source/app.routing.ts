import { Routes, RouterModule } from '@angular/router';

import { ScheduleComponent } from './schedule/schedule.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/schedule',
		pathMatch: 'full'
	},
	{
		path: 'schedule',
		component: ScheduleComponent,
	},
	// {
	// 	path: 'events',
	// 	component: null,
	// },
	// {
	// 	path: 'presenters',
	// 	component: null,
	// },
	{
		path: 'categories',
		component: CategoryListComponent,
	},
];

export const appRouting: any = RouterModule.forRoot(appRoutes);
