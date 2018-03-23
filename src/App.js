import React, {Component} from 'react';
import logo from './logo.svg';
import classes from './App.css';
import './App.css';

import PieChart from './components/PieChart/PieChart';

class App extends Component {
    render() {
        return (
            <div>
                <header className={classes.appHeader}>
                    <img src={logo} className={classes.appLogo} alt="logo"/>
                    <h1 className={classes.appTitle}>Space IQ test</h1>
                </header>

                <PieChart></PieChart>

            </div>
        );
    }
}

export default App;
