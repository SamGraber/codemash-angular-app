import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { PresenterComponent } from './presenter.component';
import { Presenter } from '../../types/presenter';

interface IActivatedRouteMock {
	data: BehaviorSubject<{ presenter: Presenter }>;
}

describe('PresenterComponent', () => {
	let presenterList: PresenterComponent;
	let activatedRoute: IActivatedRouteMock;

	beforeEach(() => {
		activatedRoute = {
			data: new BehaviorSubject(null),
		};

		presenterList = new PresenterComponent(<any>activatedRoute);
	});

	it('should get the presenter from the active route', () => {
		const expectedPresenter = { id: 2, name: 'Test2' };
		activatedRoute.data.next({ presenter: <any>expectedPresenter });

		presenterList.ngOnInit();

		expect(presenterList.presenter).to.deep.equal(expectedPresenter);
	});
});
