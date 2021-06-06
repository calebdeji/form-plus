import { Template, TemplateCategory, TemplateDate, TemplateOrder } from 'app/api/types';
import getActionString from 'app/utils/getActionString';
import { GetFilteredDataParams } from 'app/utils/pagination';
import { NewPagintaion, ReducerStatus } from '../types';

export interface ContentState {
	status: ReducerStatus;
	data: Array<Template>;
	pagination: NewPagintaion;
	filteredData: Array<Template>;
}

export const FETCH_ALL_CONTENTS = getActionString('fetch_all_contents');

export const FETCH_CONTENTS_BY_FILTER = getActionString('fetch_contents_by_filter');

export type FetchContentsByFilter = GetFilteredDataParams;

export type FetchContentsByQueryPayload = Omit<FetchContentsByFilter, 'query'> & {
	query: string;
};

export type FetchContentsByCategoryPayload = Omit<FetchContentsByFilter, 'category'> & {
	category: TemplateCategory;
};

export type FetchContentsByOrderPayload = Omit<FetchContentsByFilter, 'order'> & {
	order: TemplateOrder;
};

export type FetchContentsByDatePayload = Omit<FetchContentsByFilter, 'date'> & {
	date: TemplateDate;
};
