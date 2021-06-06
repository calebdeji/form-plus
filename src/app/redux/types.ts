import { Template } from 'app/api/types';
import { Action } from 'redux';

export interface GenericAction<Payload = any> extends Action {
	payload?: Payload;
}

export type ReducerStatus = 'loading' | 'loaded' | 'fetching' | 'fetched' | 'idle' | 'error';

export interface Pagination {
	total_entries?: number;
	current_page?: number;
	last_index?: number;
}

export interface NewPagintaion {
	current_index?: number;
	total_entries?: number;
	last_index_in_entries?: number;
	entries_list?: Array<Template>;
	last_index?: number;
}
