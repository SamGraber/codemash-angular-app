import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PresenterService, Presenter } from '../shared/presenter.service';

@Injectable()
export class PresenterListResolver implements Resolve<Presenter[]> {
	constructor(private presenterService: PresenterService) { }

	resolve(): Observable<Presenter[]> {
		return this.presenterService.getPresenters();
	}
}
