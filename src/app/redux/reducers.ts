import { combineReducers } from 'redux';
import { GenericAction } from './types';

const AppReducer = combineReducers({});

export type RootState = ReturnType<typeof AppReducer>;

const rootReducer = (state: RootState, action: GenericAction) => {
	return AppReducer(state, action);
};

export default rootReducer;
