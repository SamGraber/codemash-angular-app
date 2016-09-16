import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PresenterService, Presenter } from '../shared/presenter.service';
import { IPresenterDetailParams } from '../routing/presenters.routing';

@Component({
	moduleId: module.id,
	selector: 'cm-presenter',
	templateUrl: 'presenter.component.html',
})
export class PresenterComponent implements OnInit {
	presenter: Presenter;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit(): void {
		this.activatedRoute.data.map((x: any) => x.presenter).subscribe(presenter => {
			this.presenter = presenter;
		});
	}
}
