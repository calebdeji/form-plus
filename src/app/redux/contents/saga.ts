import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from 'app/api';
import { FETCH_ALL_CONTENTS, FETCH_CONTENTS_BY_FILTER } from './types';
import { GenericResponse } from 'app/api/types';
import { getFilteredData, GetFilteredData } from 'app/utils/paginations';

function* fetchAllContentsSaga() {
	try {
		yield put({ type: FETCH_ALL_CONTENTS.pending });
		const data: GenericResponse = yield call(api.fetchAllContents);
		const filteredData: GetFilteredData = yield call(getFilteredData, {
			data: data.data,
		});
		yield put({ type: FETCH_ALL_CONTENTS.fulfilled, payload: { ...filteredData, data: data.data } });
	} catch (error) {
		const message = error.message;
		console.warn(`Error ${message}`);

		yield put({ type: FETCH_ALL_CONTENTS.error, payload: message });
	}
}

function* fetchContentsByFilter(action: any) {
	try {
		yield put({ type: FETCH_CONTENTS_BY_FILTER.pending });
		const data: GetFilteredData = yield call(getFilteredData, action.payload);

		yield put({ type: FETCH_CONTENTS_BY_FILTER.fulfilled, payload: data });
	} catch (error) {
		const message = 'Oops, something happened';

		console.warn(`Error ${message}`);

		yield put({ type: FETCH_CONTENTS_BY_FILTER.error, payload: message });
	}
}

export function* contentSaga() {
	yield all([
		takeLatest(FETCH_ALL_CONTENTS.default, fetchAllContentsSaga),
		takeLatest(FETCH_CONTENTS_BY_FILTER.default, fetchContentsByFilter),
	]);
}
