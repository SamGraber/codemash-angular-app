import { Category } from './category';

export interface Event {
	id: number;
	name: string;
	timeslot: string;
	description: string;
	categories: Category[];
}
