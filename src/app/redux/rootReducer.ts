import { IAppState } from './iapp-state';
import { INCREMENT } from '../actions';

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case INCREMENT:
            return { Counter: state.Counter + 1, Message:{ NewMessages:state.Message.NewMessages+1} }

        default:
            break;
    }

    return state;
}