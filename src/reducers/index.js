
import { combineReducers } from 'redux';

import playScript          from './reducer_playscript';
import emotionData         from './reducer_emotiondata';
import counter             from './reducer_counter';

const rootReducer = combineReducers(
    {
        playScript,
        emotionData,
        counter
    }
);

export default rootReducer;
