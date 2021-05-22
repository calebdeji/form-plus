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
