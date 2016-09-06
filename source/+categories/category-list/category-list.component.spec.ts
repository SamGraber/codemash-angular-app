import { Observable } from 'rxjs/Observable';

import { CategoryListComponent } from './category-list.component';

interface ICategoryServiceMock {
	getCategories: Sinon.SinonSpy;
}

describe('CategoryListComponent', () => {
	let categoryList: CategoryListComponent;
	let categoryService: ICategoryServiceMock;

	beforeEach(() => {
		categoryService = {
			getCategories: sinon.spy(),
		};

		categoryList = new CategoryListComponent(<any>categoryService);
	});

	it('should load the categories on init', () => {
		let categories;
		const expectedCategories = [
			{ id: 1, name: 'Test1' },
			{ id: 2, name: 'Test2' },
		];
		categoryService.getCategories = sinon.spy(() => Observable.of(expectedCategories));

		categoryList.ngOnInit();

		categoryList.categories.subscribe(data => categories = data);
		expect(categories).to.deep.equal(expectedCategories);
	});
});
