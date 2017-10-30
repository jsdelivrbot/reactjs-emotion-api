
import { FETCH_PLAYSCRIPT } from '../actions/index';

export default function( state = null, action ) {
    switch ( action.type ) {

    case FETCH_PLAYSCRIPT:
        return action.payload.data;
    }

    return state;
}
