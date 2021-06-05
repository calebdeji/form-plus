import { Template, TemplateCategory, TemplateDate, TemplateOrder } from 'app/api/types';

import { Pagination } from 'app/redux/types';
import { sortArrayInAscendingOrder, sortArrayInDescendingOrder } from './helpers';

// interface GetPaginationDataParams {
// 	data: Array<any>;
// 	total_entries: number;
// }

// const getPaginationData = (data: Array<any>): Pagination => {
// 	return {
// 		current_page: 1,
// 		total_entries: 2000,
// 	};
// };

export const MAXIMUM_PAGINATION_DATA_AT_ONCE = 10;

const getFilteredDataByQueryAndCategory = (
	query: string = '',
	category: TemplateCategory = 'all',
	data: Array<Template>
): Promise<{ data: Array<Template>; totalEntries: number }> => {
	let filteredBySearchWord: Array<Template> = [];
	let totalEntries: number = 0;

	console.log({ category });

	const pushDataToFilteredList = (data: Template) => {
		if (filteredBySearchWord.length !== MAXIMUM_PAGINATION_DATA_AT_ONCE) {
			console.log('push a');
			filteredBySearchWord.push(data);
		}
		totalEntries = totalEntries + 1;
	};

	for (let index = 0; index < data.length; index++) {
		const element = data[index];

		if (!query && category === 'all') {
			pushDataToFilteredList(element);
		} else {
			if (query) {
				if (category !== 'all') {
					if (element.name.indexOf(query) !== -1 && element.category.indexOf(category) !== -1) {
						pushDataToFilteredList(element);
					}
				} else {
					if (element.name.indexOf(query) !== -1) {
						pushDataToFilteredList(element);
					}
				}
			} else {
				if (element.category.indexOf(category) !== -1) {
					pushDataToFilteredList(element);
				}
			}
		}
	}

	return new Promise((resolve) => {
		console.log({ filteredBySearchWord });
		resolve({
			data: filteredBySearchWord,
			totalEntries,
		});
	});

	// return filteredBySearchWord;
};

const getFilteredDataByOrder = (order: TemplateOrder = 'default', data: Array<Template>): Array<Template> => {
	if (order === 'default') return data;
	else if (order === 'ascending') {
		return sortArrayInAscendingOrder(data, 'name');
	} else {
		return sortArrayInDescendingOrder(data, 'name');
	}
};

const getFilteredDataByDate = (order: TemplateDate = 'default', data: Array<Template>): Array<Template> => {
	if (order === 'default') return data;
	else if (order === 'ascending') {
		return sortArrayInAscendingOrder(data, 'created');
	} else {
		return sortArrayInDescendingOrder(data, 'created');
	}
};

export interface GetFilteredDataParams {
	data: Array<Template>;
	category?: TemplateCategory;
	order?: TemplateOrder;
	date?: TemplateDate;
	currentIndex?: number;
	query?: string;
	totalEntries?: number;
}

export interface GetFilteredData {
	filteredData: Array<Template>;
	pagination: Pagination;
}

const getCurrentPage = (totalEntries: number, currentIndex: number) => {
	return 1;
};

export const getFilteredData = async ({
	currentIndex = 0,
	...rest
}: GetFilteredDataParams): Promise<GetFilteredData> => {
	const { data: filteredListByQueryAndCategory, totalEntries } = await getFilteredDataByQueryAndCategory(
		rest.query,
		rest.category,
		rest.data.slice(currentIndex)
	);
	const filteredListByOrder = getFilteredDataByOrder(rest.order, filteredListByQueryAndCategory);
	const filteredListByDate = getFilteredDataByDate(rest.date, filteredListByOrder);

	const lastIndex = rest.data.indexOf(filteredListByQueryAndCategory[filteredListByQueryAndCategory.length - 1]);
	const entries = rest.totalEntries || totalEntries;

	const paginationData: Pagination = {
		current_page: getCurrentPage(entries, lastIndex),
		total_entries: entries,
		last_index: lastIndex,
	};

	return {
		filteredData: filteredListByDate,
		pagination: paginationData,
	};
};
