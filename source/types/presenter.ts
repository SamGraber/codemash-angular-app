import { Category } from './category';

export interface Presenter {
	id: number;
	name: string;
	bio: string;
	categories: Category[];
	// event model
	events: any[];
}
