import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EventListComponent } from './event-list/event-list.component';
import { SearchBoxComponent } from './searchBox/searchBox.component';

const components = [
	EventListComponent,
	SearchBoxComponent,
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
	],
	declarations: components,
	exports: components,
})
export class ComponentsModule { }
