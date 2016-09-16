import { Routes, RouterModule } from '@angular/router';

export interface IPresenterDetailParams {
	id: number;
}

const presenterRoutes: Routes = [
	{
		path: '',
		component: null,
		resolve: {
			presenters: null,
		},
	},
	{
		path: ':id',
		component: null,
		resolve: {
			presenter: null,
		},
	},
];

export const presenterRouting: any = RouterModule.forChild(presenterRoutes);
