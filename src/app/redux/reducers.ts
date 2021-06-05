import { combineReducers } from 'redux';
import { GenericAction } from './types';

import contentReducer from './contents/reducer';

const AppReducer = combineReducers({
	contentReducer,
});

export type RootState = ReturnType<typeof AppReducer>;

const rootReducer = (state: RootState, action: GenericAction) => {
	return AppReducer(state, action);
};

export default rootReducer;
