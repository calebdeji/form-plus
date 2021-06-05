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
