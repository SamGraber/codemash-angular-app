import { Routes, RouterModule } from '@angular/router';

import { PresenterListResolver } from './presenter-list.resolver';
import { PresenterResolver } from './presenter.resolver';

export interface IPresenterDetailParams {
	id: number;
}

const presenterRoutes: Routes = [
	{
		path: '',
		component: null,
		resolve: {
			presenters: PresenterListResolver,
		},
	},
	{
		path: ':id',
		component: null,
		resolve: {
			presenter: PresenterResolver,
		},
	},
];

export const presenterRouting: any = RouterModule.forChild(presenterRoutes);
