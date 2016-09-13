import { Component, Input, Output, EventEmitter } from '@angular/core';
import { filter } from 'lodash';

import { textSearch } from '../../util/search';

@Component({
	moduleId: module.id,
	selector: 'cm-search-box',
	templateUrl: 'searchBox.component.html',
})
export class SearchBoxComponent<T> {
	@Input() items: T[];
	@Output() filteredItems: EventEmitter<T[]> = new EventEmitter<T[]>();

	search(term: string): void {
		const results = filter(this.items, item => textSearch(item, term));
		this.filteredItems.emit(results);
	}
}
