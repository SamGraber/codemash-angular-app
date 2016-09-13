import { Component, Input, Output, EventEmitter } from '@angular/core';
import { filter, isObject, values, some, toString } from 'lodash';

@Component({
	moduleId: module.id,
	selector: 'cm-search-box',
	templateUrl: 'searchBox.component.html',
})
export class SearchBoxComponent<T> {
	@Input() items: T[];
	@Output() filteredItems: EventEmitter<T[]> = new EventEmitter<T[]>();

	search(term: string): void {
		const results = filter(this.items, item => this.textSearch(item, term));
		this.filteredItems.emit(results);
	}

	private textSearch(object: any, search: string): boolean {
		if (!search) {
			return true;
		}

		if (isObject(object)) {
			const objValues = values(object);
			return some(objValues, value => this.textSearch(value, search));
		} else {
			let dataString = object + '';
			dataString = dataString.toLowerCase();
			search = search.toLowerCase();
			return this.contains(dataString, search);
		}
	}

	private contains(str: string, substring?: string): boolean {
		if (substring) {
			return str.indexOf(substring) !== -1;
		}

		return true;
	}
}
