import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { presenterRouting } from './routing/presenters.routing';
import { PresenterListComponent } from './presenter-list/presenter-list.component';
import { PresenterComponent } from './presenter/presenter.component';
import { PresenterListResolver } from './routing/presenter-list.resolver';
import { PresenterResolver } from './routing/presenter.resolver';
import { PresenterService } from './shared/presenter.service';

@NgModule({
	imports: [
		CommonModule,
		ComponentsModule,
		presenterRouting,
	],
	declarations: [
		PresenterListComponent,
		PresenterComponent,
	],
	providers: [
		PresenterService,
		PresenterListResolver,
		PresenterResolver,
	],
})
export default class PresenterModule { }
