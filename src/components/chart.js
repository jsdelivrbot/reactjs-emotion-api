
import _                                                       from 'lodash';
import React                                                   from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average( data ) {
    return _.round( _.sum( data ) / data.length, 4 );
}

export default ( props ) => {
    return (
        <Sparklines height={ 20 } width={ 40 } data={ props.data }>
            <SparklinesLine color={ props.color } />
            <SparklinesReferenceLine type='avg' />
            <div>Average: { average( props.data ) } { props.units }</div>
        </Sparklines>
    )
}
