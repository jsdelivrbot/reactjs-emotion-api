
import { FETCH_COUNTER, INCREMENT_COUNTER } from '../actions/index';


export default function( state = null, action ) {
    switch ( action.type ) {

    case FETCH_COUNTER:
        return action.payload.counter;

    case INCREMENT_COUNTER:
        return action.payload.counter;
    }

    return state;
}
