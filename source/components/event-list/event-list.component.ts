import { Component, Input } from '@angular/core';

import { Event } from '../../types/event';

@Component({
	moduleId: module.id,
	selector: 'cm-event-list',
	templateUrl: 'event-list.component.html',
})
export class EventListComponent {
	@Input() events: Event[];
}
