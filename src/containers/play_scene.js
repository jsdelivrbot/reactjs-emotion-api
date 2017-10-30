
import React, { Component }                                 from 'react';
import { connect }                                          from 'react-redux';
import { bindActionCreators }                               from 'redux';

import { fetchEmotionData, fetchCounter, incrementCounter } from '../actions/index';
import PlayHeader                                           from '../components/play_header';
import PlayArea                                             from '../components/play_area';

const refreshRate = 1000; // 1-second interval to query the sentiment API

class PlayScene extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            scriptIndex: -1,
            actions    : [],
            actors     : null,
            emotions   : null
        };
        this.onEmotionCheck = this.onEmotionCheck.bind( this );
    }

    onEmotionCheck() {
        this.props.fetchEmotionData( this.props.playScript[ this.state.scriptIndex ].text_entry );
    }

    updateState( state ) {
        this.props.fetchCounter();
        const self = this;
        if ( this.props.counter === this.state.scriptIndex + 1 && this.props.playScript[ this.props.counter ] )
            setTimeout(
                function() {
                    self.setState(
                        {
                            scriptIndex: self.props.counter,
                            actions    : state.actions,
                            actors     : state.actors,
                            emotions   : state.emotions,
                        }
                    );
                    self.props.incrementCounter();
                },
                refreshRate
            )
    }

    render() {
        this.props.fetchCounter();
        const playScript = this.props.playScript;
        if ( !playScript ) {
            return (
                <div>
                    PLAY SCENE
                </div>
            );
        }

        const scriptIndex = this.state.scriptIndex;
        if ( null === this.props.counter || this.props.counter > scriptIndex ) {
            let emotions;
            if ( playScript && !this.state.actors ) {
                const actors = [ ...new Set( Object.values( playScript ).map ( entry => entry.speaker ) ) ].sort();
                if ( '' === actors[ 0 ] )
                    actors.shift(); // remove the empty value
                emotions = {};
                actors.forEach(
                    name => emotions[ name ] = {
                        sadness: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        joy    : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        fear   : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        disgust: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        anger  : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                    }
                );
                this.updateState(
                    {
                        actions    : [ playScript[ 0 ] ],
                        actors,
                        emotions
                    }
                );
            }
            else {
                const script = this.props.playScript[ scriptIndex ];
console.log( 'ZZZZZZZZZ script: ', script );
                if ( script ) {
                    const name = script.speaker;
                    if ( '' === name )
                        this.updateState(
                            {
                                actions    : [ ...this.state.actions, script ],
                                actors     : this.state.actors,
                                emotions   : this.state.emotions,
                            }
                        );
                    else {
                        setTimeout( this.onEmotionCheck, refreshRate );
                        emotions = this.state.emotions;
                        if ( this.props.emotionData )
                            emotions[ name ] = this.props.emotionData;
                        this.updateState(
                            {
                                actions    : this.state.actions,
                                actors     : this.state.actors,
                                emotions,
                            }
                        );
                    }
                }
            }
        }
        else
            this.updateState(
                {
                    actions    : this.state.actions,
                    actors     : this.state.actors,
                    emotions   : this.state.emotions,
                }
            );

        const len = Object.values( playScript ).length;
        return (
            <div>
                <PlayHeader
                    title={
                        this.state.actions.length ?
                            ( this.state.actions[ 0 ].play_name + ' Script ' +
                            ( scriptIndex < len ? scriptIndex : len ) + '/' + len ) :
                            ''
                    }
                    actions={ this.state.actions }/>
                <br />
                <PlayArea
                    actors={ this.state.actors }
                    emotions={ this.state.emotions } />
            </div>
        );
    }
}

function mapStateToProps( { playScript, emotionData, counter } ) {
    return { playScript, emotionData, counter };
}

function mapDispatchToProps( dispath ) {
    return bindActionCreators( { fetchEmotionData, fetchCounter, incrementCounter }, dispath );
}

export default connect( mapStateToProps, mapDispatchToProps )( PlayScene );

