
import React, { Component } from 'react';

class PlayHeader extends Component {
    renderList() {
        return this.props.actions.map(
            entry => {
                return (
                    <li
                        key={ entry.line_id }
                        className='list-group-item'>
                        { entry.text_entry }
                    </li>
                );
            }
        )
    }

    render() {
        if ( !this.props.actions.length ) {
            return (
                <div>
                    PLAY HEADER
                </div>
            );
        }

        return (
            <div>
                <h3>{ this.props.title }</h3>
                { this.renderList() }
            </div>
        );
    }
}

export default PlayHeader;
