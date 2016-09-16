import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { presenterRouting } from './routing/presenters.routing';
import { PresenterService } from './shared/presenter.service';

@NgModule({
	imports: [
		CommonModule,
		ComponentsModule,
		presenterRouting,
	],
	providers: [
		PresenterService,
	],
})
export default class PresenterModule { }
