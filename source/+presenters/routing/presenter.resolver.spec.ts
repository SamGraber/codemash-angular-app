import { Observable } from 'rxjs/Observable';

import { PresenterResolver } from './presenter.resolver';
import { Presenter } from '../../types/presenter';

interface IPresenterServiceMock {
	getPresenter: Sinon.SinonSpy;
}

describe('PresenterResolver', () => {
	let presenterResolver: PresenterResolver;
	let presenterService: IPresenterServiceMock;

	beforeEach(() => {
		presenterService = {
			getPresenter: sinon.spy(),
		};

		presenterResolver = new PresenterResolver(<any>presenterService);
	});

	it('should load the specified presenter on resolve', () => {
		let presenter;
		const presenterId = 1;
		const expectedPresenter = { id: presenterId, name: 'Test1' };
		presenterService.getPresenter = sinon.spy(() => Observable.of(expectedPresenter));

		presenterResolver.resolve(<any>{ params: { id: presenterId }}).subscribe(data => presenter = data);

		sinon.assert.calledOnce(presenterService.getPresenter);
		sinon.assert.calledWith(presenterService.getPresenter, presenterId);
		expect(presenter).to.deep.equal(expectedPresenter);
	});
});
