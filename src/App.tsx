import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MainPage } from "./pages/MainPage";
import { PersonPage } from "./pages/PersonPage";

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={ MainPage } />
                <Route path="/person/:id" component={ PersonPage } />
            </Switch>
        );
    }
}

export default App;