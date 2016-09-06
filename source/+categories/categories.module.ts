import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CategoryListComponent, CategoryComponent, CategoryService } from './index';
import { categoryRouting } from './categories.routing';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		categoryRouting,
	],
	declarations: [
		CategoryComponent,
		CategoryListComponent,
	],
	providers: [CategoryService],
})
export default class CategoryModule { }
