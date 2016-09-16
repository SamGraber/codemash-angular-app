import { Observable } from 'rxjs/Observable';

import { PresenterListResolver } from './presenter-list.resolver';
import { Presenter } from '../../types/presenter';

interface IPresenterServiceMock {
	getPresenters: Sinon.SinonSpy;
}

describe('PresenterListResolver', () => {
	let presenterListResolver: PresenterListResolver;
	let presenterService: IPresenterServiceMock;

	beforeEach(() => {
		presenterService = {
			getPresenters: sinon.spy(),
		};

		presenterListResolver = new PresenterListResolver(<any>presenterService);
	});

	it('should load the presenters on resolve', () => {
		let presenters;
		const expectedPresenters = [
			{ id: 1, name: 'Test1' },
			{ id: 2, name: 'Test2' },
		];
		presenterService.getPresenters = sinon.spy(() => Observable.of(expectedPresenters));

		presenterListResolver.resolve().subscribe(data => presenters = data);

		sinon.assert.calledOnce(presenterService.getPresenters);
		expect(presenters).to.deep.equal(expectedPresenters);
	});
});
