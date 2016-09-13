import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ComponentsModule } from '../components/components.module';
import { CategoryListComponent, CategoryComponent, CategoryService } from './index';
import { categoryRouting } from './routing/categories.routing';
import { CategoryResolver } from './routing/category.resolver';
import { CategoryListResolver } from './routing/categoryList.resolver';

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
	providers: [
		CategoryService,
		CategoryResolver,
		CategoryListResolver,
	],
})
export default class CategoryModule { }
