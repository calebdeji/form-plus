import { Action } from 'redux';

export interface GenericAction<Payload = any> extends Action {
	payload?: Payload;
}
