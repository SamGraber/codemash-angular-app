import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBoxComponent } from './searchBox/searchBox.component';

@NgModule({
	imports: [CommonModule],
	declarations: [SearchBoxComponent],
	exports: [SearchBoxComponent],
})
export class ComponentsModule { }
