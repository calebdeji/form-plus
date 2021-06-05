import { all } from 'redux-saga/effects';
import { contentSaga } from './contents/saga';

export default function* rootSaga() {
	yield all([contentSaga()]);
}
