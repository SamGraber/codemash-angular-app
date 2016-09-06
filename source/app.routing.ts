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
	// {
	// 	path: 'presenters',
	// 	component: null,
	// },
	// {
	// 	path: 'categories',
	// 	component: null,
	// },
];

export const appRouting: any = RouterModule.forRoot(appRoutes);
