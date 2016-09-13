import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Category } from './category';
import { HttpService } from '../../services/http/http.service';

export { Category };

const baseUrl: string = 'http://localhost:3100/category';

@Injectable()
export class CategoryService {
	constructor(private http: HttpService) { }

	getCategories(): Observable<Category[]> {
		return this.http.get<Category[]>(baseUrl);
	}

	getCategory(id: number): Observable<Category> {
		return this.http.get<Category>(`${baseUrl}/${id}`);
	}
}
