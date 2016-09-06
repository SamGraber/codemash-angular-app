import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Category } from './category';

export { Category };

const baseUrl: string = 'http://localhost:3100/category';

@Injectable()
export class CategoryService {
	constructor(private http: Http) { }

	getCategories(): Observable<Category[]> {
		return this.http.get(baseUrl)
						.map(request => request.json())
						.catch(this.handleError);
	}

	getCategory(id: number): Observable<Category> {
		return this.http.get(`${baseUrl}/${id}`)
						.map(request => request.json())
						.catch(this.handleError);
	}

	private handleError(error: any) {
		let errorMessage: string;
		if (error.message) {
			errorMessage = error.message;
		} else if (error.status) {
			errorMessage = `${error.status} - ${error.statusText}`;
		} else {
			errorMessage = 'Server error';
		}
		console.error(errorMessage);
		return Observable.throw(errorMessage);
	}
}
