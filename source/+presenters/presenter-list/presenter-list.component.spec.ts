import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { PresenterListComponent } from './presenter-list.component';
import { Presenter } from '../../types/presenter';

interface IActivatedRouteMock {
	data: BehaviorSubject<{ presenters: Presenter[] }>;
}

describe('PresenterListComponent', () => {
	let presenterList: PresenterListComponent;
	let activatedRoute: IActivatedRouteMock;

	beforeEach(() => {
		activatedRoute = {
			data: new BehaviorSubject(null),
		};

		presenterList = new PresenterListComponent(<any>activatedRoute);
	});

	it('should get the presenters from the active route', () => {
		const expectedPresenters = [
			{ id: 1, name: 'Test1' },
			{ id: 2, name: 'Test2' },
		];
		activatedRoute.data.next({ presenters: <any>expectedPresenters });

		presenterList.ngOnInit();

		expect(presenterList.presenters).to.deep.equal(expectedPresenters);
		expect(presenterList.visiblePresenters).to.deep.equal(expectedPresenters);
	});
});
