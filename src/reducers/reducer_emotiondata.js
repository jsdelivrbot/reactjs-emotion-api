
import {  FETCH_EMOTIONTDATA } from '../actions/index';


export default function( state = null, action ) {
    switch ( action.type ) {

    case FETCH_EMOTIONTDATA:
        return action.payload.data;
    }

    return state;
}
