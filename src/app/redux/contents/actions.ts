import { GenericAction } from '../types';
import { FetchContentsByFilter, FETCH_ALL_CONTENTS, FETCH_CONTENTS_BY_FILTER } from './types';

export const fetchAllContents = (): GenericAction => {
	return { type: FETCH_ALL_CONTENTS.default };
};

export const fetchContentsByFilter = (payload: FetchContentsByFilter): GenericAction<FetchContentsByFilter> => {
	return {
		type: FETCH_CONTENTS_BY_FILTER.default,
		payload,
	};
};
