import { Template } from 'app/api/types';
import { ReducerStatus } from 'app/redux/types';
import { MAXIMUM_PAGINATION_DATA_AT_ONCE } from './paginations';

type ObjectType = {
	[key: string]: any;
};

export function mapKeys<T extends Array<ObjectType>>(
	items: T,
	key: string | string[],
	exclude: string[] = []
): { [key: string]: T[number] } {
	return items.reduce((obj, currentObj) => {
		const newObject = Object.fromEntries(Object.entries(currentObj).filter(([key]) => !exclude.includes(key)));

		if (typeof key === 'string') {
			obj[currentObj[key]] = newObject;
		} else {
			let newKey = currentObj[key[0]];
			for (let index = 1; index < key.length; index++) {
				newKey = `${newKey}_${currentObj[key[index]]}`;
			}
			obj[newKey] = newObject;
		}
		return obj;
	}, {});
}

export const isEntityEmpty = (data: string | ObjectType | Array<any>): boolean => {
	if (typeof data == 'string') {
		return !data.trim().length;
	}

	if (Array.isArray(data)) return !data.length;

	return !Object.keys(data).length;
};

type Query = 'created' | 'name';

export function sortArrayInAscendingOrder<T extends Template>(data: Array<T>, query: Query = 'name') {
	let filteredElements = [...data];
	return filteredElements.sort((a, b) => {
		if (a[query] > b[query]) return 1;
		else if (a[query] < b[query]) return -1;
		return 0;
	});
}

export function sortArrayInDescendingOrder<T extends Template>(data: Array<T>, query: Query = 'name') {
	let filteredElements = [...data];
	return filteredElements.sort((a, b) => {
		if (a[query] < b[query]) return 1;
		else if (a[query] > b[query]) return -1;
		return 0;
	});
}

export const getTotalPages = (totalEntries?: number) => {
	if (!totalEntries) return 1;
	if (totalEntries / MAXIMUM_PAGINATION_DATA_AT_ONCE <= 0) return 1;
	return Math.ceil(totalEntries / MAXIMUM_PAGINATION_DATA_AT_ONCE);
};

export const isReducerBusy = (status: ReducerStatus) => {
	switch (status) {
		case 'fetching':
		case 'loading':
		case 'idle':
			return true;
		default:
			return false;
	}
};

const MAX_CHARACTERS = 2000;

export const extractDescription = (description: string) => {
	return description.substr(0, MAX_CHARACTERS);
};
