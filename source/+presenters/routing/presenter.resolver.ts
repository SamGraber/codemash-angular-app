import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PresenterService, Presenter } from '../shared/presenter.service';

interface IPresenterRouteParams {
	id: number;
}

@Injectable()
export class PresenterResolver implements Resolve<Presenter> {
	constructor(private presenterService: PresenterService) { }

	resolve(route: ActivatedRouteSnapshot): Observable<Presenter> {
		return this.presenterService.getPresenter((<IPresenterRouteParams>route.params).id);
	}
}
