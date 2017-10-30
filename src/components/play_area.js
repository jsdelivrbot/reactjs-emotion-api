
import React, { Component } from 'react';

import Chart                from '../components/chart';


class PlayArea extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            actorNames: null
        }
    }

    renderList() {
        return this.props.actors.map(
            name => {
                const emotion = this.props.emotions[ name ];
                return (
                    <tr key={ name }>
                        <td>{ name }</td>
                        <td>
                            <Chart
                                color='black'
                                units=''
                                data={ emotion.sadness } />
                        </td>
                        <td>
                            <Chart
                                color='black'
                                units=''
                                data={ emotion.joy } />
                        </td>
                        <td>
                            <Chart
                                color='black'
                                units=''
                                data={ emotion.fear } />
                        </td>
                        <td>
                            <Chart
                                color='black'
                                units=''
                                data={ emotion.disgust } />
                        </td>
                        <td>
                            <Chart
                                color='black'
                                units=''
                                data={ emotion.anger } />
                        </td>
                    </tr>
                );
            }
        )
    }

    render() {
        if ( !this.props.actors )
            return (
                <div>
                    The play area is empty.
                </div>
            );

        return (
            <div>
                Actors and Emotion Graphs
                <table className='table table-over'>
                    <thead>
                        <tr>
                            <th>Actors</th>
                            <th>Sadness</th>
                            <th>Joy</th>
                            <th>Fear</th>
                            <th>Disgust</th>
                            <th>Anger</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.emotions && this.props.emotions[ this.props.actors[ 0 ] ] ? this.renderList() : 'Loading...' }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PlayArea;
