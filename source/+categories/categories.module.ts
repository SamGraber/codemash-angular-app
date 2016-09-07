import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ComponentsModule } from '../components/components.module';
import { CategoryListComponent, CategoryComponent, CategoryService } from './index';
import { categoryRouting } from './categories.routing';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		ComponentsModule,
		categoryRouting,
	],
	declarations: [
		CategoryComponent,
		CategoryListComponent,
	],
	providers: [CategoryService],
})
export default class CategoryModule { }
