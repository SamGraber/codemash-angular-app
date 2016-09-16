import { Observable } from 'rxjs/Observable';

import { CategoryResolver } from './category.resolver';
import { Category } from '../../types/category';

interface ICategoryServiceMock {
	getCategory: Sinon.SinonSpy;
}

describe('CategoryResolver', () => {
	let categoryResolver: CategoryResolver;
	let categoryService: ICategoryServiceMock;

	beforeEach(() => {
		categoryService = {
			getCategory: sinon.spy(),
		};

		categoryResolver = new CategoryResolver(<any>categoryService);
	});

	it('should load the specified category on resolve', () => {
		let category;
		const categoryId = 1;
		const expectedCategory = { id: categoryId, name: 'Test1' };
		categoryService.getCategory = sinon.spy(() => Observable.of(expectedCategory));

		categoryResolver.resolve(<any>{ params: { id: categoryId }}).subscribe(data => category = data);

		sinon.assert.calledOnce(categoryService.getCategory);
		sinon.assert.calledWith(categoryService.getCategory, categoryId);
		expect(category).to.deep.equal(expectedCategory);
	});
});
