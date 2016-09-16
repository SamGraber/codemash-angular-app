import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PresenterService, Presenter } from '../shared/presenter.service';

@Component({
	moduleId: module.id,
	selector: 'cm-presenters',
	templateUrl: 'presenter-list.component.html',
})
export class PresenterListComponent implements OnInit {
	presenters: Presenter[];
	visiblePresenters: Presenter[];

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit(): void {
		this.activatedRoute.data.map((x: any) => x.presenters).subscribe(presenters => {
			this.presenters = presenters;
			this.visiblePresenters = presenters;
		});
	}
}
