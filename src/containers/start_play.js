
import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPlayData }      from '../actions/index';


class StartPlay extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            buttonLabel: 'Play',
            buttonState: false
        };

        this.onButtonClick = this.onButtonClick.bind( this );
    }

    onButtonClick( event ) {
        this.refs.playBtn.setAttribute( 'disabled', 'disabled' );
        this.props.fetchPlayData();
    }

    render() {
        return (
            <div>
                <span className='input-group-btn'>
                    <button
                        ref='playBtn'
                        onClick={ this.onButtonClick }
                        className='btn btn-secondary'>
                        { this.state.buttonLabel }
                    </button>
                </span>
            </div>
        );
    }
}

function mapDispatchToProps( dispath ) {
    return bindActionCreators( { fetchPlayData }, dispath );
}

export default connect( null, mapDispatchToProps )( StartPlay );
