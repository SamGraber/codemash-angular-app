import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CategoryListComponent } from './category-list.component';
import { Category } from '../../types/category';

interface IActivatedRouteMock {
	data: BehaviorSubject<{ categories: Category[] }>;
}

describe('CategoryListComponent', () => {
	let categoryList: CategoryListComponent;
	let activatedRoute: IActivatedRouteMock;

	beforeEach(() => {
		activatedRoute = {
			data: new BehaviorSubject(null),
		};

		categoryList = new CategoryListComponent(<any>activatedRoute);
	});

	it('should get the categories from the active route', () => {
		const expectedCategories = [
			{ id: 1, name: 'Test1' },
			{ id: 2, name: 'Test2' },
		];
		activatedRoute.data.next({ categories: <any>expectedCategories });

		categoryList.ngOnInit();

		expect(categoryList.categories).to.deep.equal(expectedCategories);
		expect(categoryList.visibleCategories).to.deep.equal(expectedCategories);
	});
});
