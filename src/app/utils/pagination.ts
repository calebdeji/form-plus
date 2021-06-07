import { Template, TemplateCategory, TemplateDate, TemplateOrder } from 'app/api/types';
import store from 'app/redux';
import { NewPagintaion } from 'app/redux/types';
import { isEntityEmpty, sortArrayInAscendingOrder, sortArrayInDescendingOrder } from './helpers';

export const MAXIMUM_PAGINATION_DATA_AT_ONCE = 10;

interface FilteredDataByQueryAndCategoryReturnType {
	data: Array<Template>;
	totalEntries?: number;
	entriesList?: Array<Template>;
}

const getFilteredDataByQueryAndCategory = (
	data: Array<Template>,
	query: string = '',
	category: TemplateCategory = 'all',
	totalEntriesRecorded: boolean = false
): Promise<FilteredDataByQueryAndCategoryReturnType> => {
	let filteredBySearchWordAndCategory: Array<Template> = [];
	let totalEntries: number = 0;
	let shouldBreak = false;
	let entriesList: Array<Template> = [];

	const pushDataToFilteredList = (data: Template) => {
		const toPush = filteredBySearchWordAndCategory.length !== MAXIMUM_PAGINATION_DATA_AT_ONCE;

		if (toPush) {
			filteredBySearchWordAndCategory.push(data);
		}
		if (totalEntriesRecorded && !toPush) {
			shouldBreak = true;
		} else if (!totalEntriesRecorded) {
			totalEntries = totalEntries + 1;
			entriesList.push(data);
		}
	};

	for (let index = 0; index < data.length; index++) {
		if (shouldBreak) {
			break;
		}

		const template = data[index];

		if (isEntityEmpty(query) && category === 'all') {
			pushDataToFilteredList(template);
		} else {
			if (!isEntityEmpty(query)) {
				if (category !== 'all') {
					if (template.name.indexOf(query.toLowerCase()) !== -1 && template.category.indexOf(category) !== -1) {
						pushDataToFilteredList(template);
					}
				} else {
					if (template.name.indexOf(query.toLowerCase()) !== -1) {
						pushDataToFilteredList(template);
					}
				}
			} else {
				if (template.category.indexOf(category) !== -1) {
					pushDataToFilteredList(template);
				}
			}
		}
	}

	return new Promise((resolve) => {
		resolve({
			data: filteredBySearchWordAndCategory,
			totalEntries,
			entriesList,
		});
	});
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

export interface GetFilteredData {
	filteredData: Array<Template>;
	pagination: NewPagintaion;
}

export interface GetFilteredDataParams {
	category?: TemplateCategory;
	order?: TemplateOrder;
	date?: TemplateDate;
	nextIndex?: number;
	query?: string;
	totalEntries?: number;
	entriesList?: Array<Template>;
	data?: Array<Template>;
	lastIndex?: number;
}

export const getFilteredData = async ({ nextIndex = 0, ...rest }: GetFilteredDataParams): Promise<GetFilteredData> => {
	const data = rest.data || store.getState().contentReducer.data;
	const isTotalEntriesRecorder = (rest.totalEntries || 0) > 0 ? true : false;
	const {
		data: filteredListByQueryAndCategory,
		totalEntries,
		entriesList,
	} = await getFilteredDataByQueryAndCategory(data.slice(nextIndex), rest.query, rest.category, isTotalEntriesRecorder);

	const filteredListByOrder = getFilteredDataByOrder(rest.order, filteredListByQueryAndCategory);
	const filteredListByDate = getFilteredDataByDate(rest.date, filteredListByOrder);
	let lastIndexInEntries = 0;

	if (!isEntityEmpty(rest.entriesList || [])) {
		const index = rest.entriesList?.indexOf(filteredListByQueryAndCategory[filteredListByQueryAndCategory.length - 1]);
		if (index !== undefined && index !== -1) {
			lastIndexInEntries = index;
		}
	} else {
		const index = entriesList?.indexOf(filteredListByQueryAndCategory[filteredListByQueryAndCategory.length - 1]);
		if (index !== undefined && index !== -1) {
			lastIndexInEntries = index;
		}
	}
	const currentIndex = data.indexOf(filteredListByQueryAndCategory[filteredListByQueryAndCategory.length - 1]);

	const pagination: NewPagintaion = {
		total_entries: isTotalEntriesRecorder ? rest.totalEntries || 0 : totalEntries || 0,
		current_index: currentIndex,
		last_index_in_entries: lastIndexInEntries,
		entries_list: !isEntityEmpty(rest.entriesList || []) ? (rest.entriesList as []) : (entriesList as []),
		last_index: nextIndex,
	};

	return {
		filteredData: filteredListByDate,
		pagination,
	};
};
