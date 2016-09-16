import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CategoryComponent } from './category.component';
import { Category } from '../../types/category';

interface IActivatedRouteMock {
	data: BehaviorSubject<{ category: Category }>;
}

describe('CategoryComponent', () => {
	let categoryList: CategoryComponent;
	let activatedRoute: IActivatedRouteMock;

	beforeEach(() => {
		activatedRoute = {
			data: new BehaviorSubject(null),
		};

		categoryList = new CategoryComponent(<any>activatedRoute);
	});

	it('should get the category from the active route', () => {
		const expectedCategory = { id: 2, name: 'Test2' };
		activatedRoute.data.next({ category: <any>expectedCategory });

		categoryList.ngOnInit();

		expect(categoryList.category).to.deep.equal(expectedCategory);
	});
});
