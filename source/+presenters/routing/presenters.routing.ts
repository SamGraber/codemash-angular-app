import { Routes, RouterModule } from '@angular/router';

import { PresenterListComponent } from '../presenter-list/presenter-list.component';
import { PresenterComponent } from '../presenter/presenter.component';
import { PresenterListResolver } from './presenter-list.resolver';
import { PresenterResolver } from './presenter.resolver';

export interface IPresenterDetailParams {
	id: number;
}

const presenterRoutes: Routes = [
	{
		path: '',
		component: PresenterListComponent,
		resolve: {
			presenters: PresenterListResolver,
		},
	},
	{
		path: ':id',
		component: PresenterComponent,
		resolve: {
			presenter: PresenterResolver,
		},
	},
];

export const presenterRouting: any = RouterModule.forChild(presenterRoutes);
