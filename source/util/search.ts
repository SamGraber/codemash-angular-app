import { isObject, values, some } from 'lodash';

import { contains, toString } from './string';

export function textSearch(object: any, search: string): boolean {
	if (!search) {
		return true;
	}

	if (isObject(object)) {
		const objValues = values(object);
		return some(objValues, value => textSearch(value, search));
	} else {
		let dataString = toString(object);
		dataString = dataString.toLowerCase();
		search = search.toLowerCase();
		return contains(dataString, search);
	}
}
