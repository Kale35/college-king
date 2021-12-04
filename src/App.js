import './App.css';
import Home from './Pages/Home/Home';
import College from './Pages/College/College';
import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path = "/">
                        <Home/>
                    </Route>
                    <Route path = "/college">
                        <College/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
