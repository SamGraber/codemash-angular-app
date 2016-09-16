import { Event } from './event';

export interface Category {
	id: number;
	name: string;
	description: string;
	events: Event[];
}
