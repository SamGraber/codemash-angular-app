import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { PresenterService } from './shared/presenter.service';

@NgModule({
	imports: [
		CommonModule,
		ComponentsModule,
	],
	providers: [
		PresenterService,
	],
})
export default class PresenterModule { }
