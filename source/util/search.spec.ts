import { textSearch } from './search';

interface ITestObject {
	prop?: string;
	nestedObject?: { prop?: string };
}

describe('search util', () => {
	describe('textSearch', (): void => {
		it('should return true for all items if search is null or empty', (): void => {
			const object1: ITestObject = {
				prop: 'some string',
			};

			const object2: ITestObject = {
				prop: 'another value',
			};

			expect(textSearch(object1, null)).to.be.true;
			expect(textSearch(object2, null)).to.be.true;
			expect(textSearch(object1, '')).to.be.true;
			expect(textSearch(object2, '')).to.be.true;
		});

		it('should search the actual data values if they arent objects', (): void => {
			expect(textSearch(1, '2')).to.be.false;
			expect(textSearch(2, '2')).to.be.true;
			expect(textSearch(3, '2')).to.be.false;
			expect(textSearch(4, '2')).to.be.false;
			expect(textSearch(5, '2')).to.be.false;
		});

		it('should include items that contain the search string', (): void => {
			const searchText: string = 'my';

			const matchingObject1: ITestObject = {
				prop: 'my string',
			};

			const matchingObject2: ITestObject = {
				prop: 'some string with my',
			};

			const objectWithoutSearchString: ITestObject = {
				prop: '2',
			};

			const objectWithDifferentCase: ITestObject = {
				prop: 'MY string',
			};

			expect(textSearch(matchingObject1, searchText)).to.be.true;
			expect(textSearch(objectWithoutSearchString, searchText)).to.be.false;
			expect(textSearch(matchingObject2, searchText)).to.be.true;
			expect(textSearch(objectWithDifferentCase, searchText)).to.be.true;
		});

		it('should recursively search the properties of an object', (): void => {
			const searchText: string = 'my';
			const objectWithNestedObject: ITestObject = {
				nestedObject: {
					prop: 'my string',
				},
			};

			expect(textSearch(objectWithNestedObject, searchText)).to.be.true;
		});
	});
});