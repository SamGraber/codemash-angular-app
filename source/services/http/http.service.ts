import { each } from 'lodash';
import { Injectable } from '@angular/core';

import { Http, URLSearchParams, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export interface IHttpUtility {
	buildQueryString(params: any): URLSearchParams;

	get<TDataType>(endpoint: string, params?: any): Observable<TDataType>;
	post<TDataType>(endpoint: string, data: any): Observable<TDataType>;
	put<TDataType>(endpoint: string, data: any): Observable<TDataType>;
	delete(endpoint: string, params?: any): Observable<void>;
}

@Injectable()
export class HttpService implements IHttpUtility {
	constructor(private http: Http) {}

	buildQueryString(params: any): URLSearchParams {
		const searchParams: URLSearchParams = new URLSearchParams();
		each(params, (param: any, key: string): void => {
			searchParams.set(key, param || '');
		});
		return searchParams;
	}

	get<TDataType>(endpoint: string, params?: any): Observable<TDataType> {
		return this.http.get(endpoint, { search: this.buildQueryString(params) })
			.catch(this.handleError.bind(this))
			.map((response: Response): TDataType => this.parse(response));
	}

	post<TDataType>(endpoint: string, data: any): Observable<TDataType> {
		const headers: Headers = new Headers({
			'Content-Type': 'application/json',
		});
		const options: RequestOptions = new RequestOptions({ headers });

		return this.http.post(endpoint, JSON.stringify(data), options)
			.catch(this.handleError.bind(this))
			.map((response: Response) => this.parse(response));
	}

	put<TDataType>(endpoint: string, data: any): Observable<TDataType> {
		const headers: Headers = new Headers({
			'Content-Type': 'application/json',
		});
		const options: RequestOptions = new RequestOptions({ headers });

		return this.http.put(endpoint, JSON.stringify(data), options)
			.catch(this.handleError.bind(this))
			.map((response: Response) => this.parse(response));
	}

	delete(endpoint: string, params?: any): Observable<void> {
		return this.http.delete(endpoint, { search: this.buildQueryString(params) })
			.catch(this.handleError.bind(this))
			.map(() => null);
	}

	private parse(response: any): any {
		return response._body
			? response.json()
			: null;
	}

	private handleError(error: any): Observable<any> {
		let errorMessage: string;
		if (error.message) {
			errorMessage = error.message;
		} else if (error.status) {
			errorMessage = `${error.status} - ${error.statusText}`;
		} else {
			errorMessage = 'Server error';
		}
		console.error(errorMessage);
		return Observable.throw(error);
	}
}
