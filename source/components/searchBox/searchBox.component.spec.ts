import { SearchBoxComponent } from './searchBox.component';

interface ITestObject {
	prop: string;
}

describe('SearchBoxComponent', () => {
	let searchBox: SearchBoxComponent<ITestObject>;
	let emitSpy: Sinon.SinonSpy;

	beforeEach(() => {
		searchBox = new SearchBoxComponent<ITestObject>();
		emitSpy = sinon.spy();
		searchBox.filteredItems = <any>{ emit: emitSpy };
	});

	it('should filter the items and emit the results', () => {
		const items: ITestObject[] = [
			{ prop: 'something' },
			{ prop: 'other' },
			{ prop: 'something 2' },
		];
		const expectedResults: ITestObject[] = [items[0], items[2]];
		searchBox.items = items;

		searchBox.search('something');

		sinon.assert.calledOnce(emitSpy);
		sinon.assert.calledWith(emitSpy, expectedResults);
	});
});
