// @see https://engineering.musefind.com/how-to-benchmark-react-components-the-quick-and-dirty-guide-f595baf1014c

import React, {Component} from 'react';
import Perf from 'react-addons-perf'
import './App.css';

// import ListItem from './components/ListItem';
import ListItem from './components/PureListItem';

import arrayGenerator from './utils/arrayGenerator';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            multiplier: 1
        }
    }

    componentDidUpdate() {
        Perf.stop();
        Perf.printInclusive();
        Perf.printWasted();
    }

    resetMultiplier() {
        Perf.start();
        this.setState({ multiplier: 2 })
    }

    render() {
        return (
            <div className="app">
                <p><button onClick={this.resetMultiplier.bind(this)}>Click Me</button></p>
                <div className="main">
                    <ul>
                        {
                            arrayGenerator(5000).map(i => {
                                return <ListItem key={i} text={i}/>
                            })
                        }
                    </ul>
                    <ul>
                        {
                            arrayGenerator(5000).map(i => {
                                return <ListItem key={i} text={i + this.state.multiplier}/>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
