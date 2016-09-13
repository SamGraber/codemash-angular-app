import { Observable } from 'rxjs/Observable';

import { CategoryListResolver } from './category-list.resolver';
import { Category } from '../shared/category';

interface ICategoryServiceMock {
	getCategories: Sinon.SinonSpy;
}

describe('CategoryListResolver', () => {
	let categoryListResolver: CategoryListResolver;
	let categoryService: ICategoryServiceMock;

	beforeEach(() => {
		categoryService = {
			getCategories: sinon.spy(),
		};

		categoryListResolver = new CategoryListResolver(<any>categoryService);
	});

	it('should load the categories on resolve', () => {
		let categories;
		const expectedCategories = [
			{ id: 1, name: 'Test1' },
			{ id: 2, name: 'Test2' },
		];
		categoryService.getCategories = sinon.spy(() => Observable.of(expectedCategories));

		categoryListResolver.resolve().subscribe(data => categories = data);

		sinon.assert.calledOnce(categoryService.getCategories);
		expect(categories).to.deep.equal(expectedCategories);
	});
});
