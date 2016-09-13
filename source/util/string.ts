export function toString(obj: any): string {
	return obj + '';
}

export function contains(str: string, substring?: string): boolean {
	if (substring) {
		return str.indexOf(substring) !== -1;
	}

	return true;
}
