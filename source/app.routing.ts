import { Routes, RouterModule } from '@angular/router';

import { ScheduleComponent } from './schedule/schedule.component';

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
	{
		path: 'presenters',
		loadChildren: 'source/+presenters/presenters.module',
	},
	{
		path: 'categories',
		loadChildren: 'source/+categories/categories.module',
	},
];

export const appRouting: any = RouterModule.forRoot(appRoutes);
