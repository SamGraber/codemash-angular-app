import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Presenter } from '../../types/presenter';
import { HttpService } from '../../services/http/http.service';

export { Presenter };

const baseUrl: string = 'http://localhost:3100/presenter';

@Injectable()
export class PresenterService {
	constructor(private http: HttpService) { }

	getPresenters(): Observable<Presenter[]> {
		return this.http.get<Presenter[]>(baseUrl);
	}

	getPresenter(id: number): Observable<Presenter> {
		return this.http.get<Presenter>(`${baseUrl}/${id}`);
	}
}
