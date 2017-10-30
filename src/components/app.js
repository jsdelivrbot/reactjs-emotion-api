
import React, { Component } from 'react';

import StartPlay            from '../containers/start_play';
import PlayScene            from '../containers/play_scene';


class App extends Component {
    render() {
        return (
            <div>
                <StartPlay />
                <br />
                <PlayScene />
            </div>
        );
    }
}

export default App;
