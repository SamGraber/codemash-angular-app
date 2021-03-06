import { Category } from './category';
import { Event } from './event';

export interface Presenter {
	id: number;
	name: string;
	bio: string;
	categories: Category[];
	events: Event[];
}
