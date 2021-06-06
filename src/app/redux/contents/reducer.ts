import { GenericAction } from '../types';
import { ContentState, FETCH_ALL_CONTENTS, FETCH_CONTENTS_BY_FILTER } from './types';

const initState: ContentState = {
	status: 'idle',
	data: [],
	pagination: {},
	filteredData: [],
};

const contentReducer = (state = initState, action: GenericAction): ContentState => {
	switch (action.type) {
		case FETCH_ALL_CONTENTS.pending:
		case FETCH_CONTENTS_BY_FILTER.pending:
			return {
				...state,
				status: 'fetching',
			};

		case FETCH_ALL_CONTENTS.error:
		case FETCH_CONTENTS_BY_FILTER.error:
			return {
				...initState,
				status: 'error',
			};

		case FETCH_ALL_CONTENTS.fulfilled: {
			return {
				...state,
				data: action.payload.data,
				status: 'fetched',
				filteredData: action.payload.filteredData,
				pagination: action.payload.pagination,
			};
		}

		case FETCH_CONTENTS_BY_FILTER.fulfilled: {
			return {
				...state,
				status: 'fetched',
				filteredData: action.payload.filteredData,
				pagination: action.payload.pagination,
			};
		}

		default:
			return state;
	}
};

export default contentReducer;
