import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { PersonPage } from "./pages/PersonPage";
import { ErrorBoundary } from "./components";

class App extends React.Component {
    render() {
        return (
            <Switch>
                <ErrorBoundary>
                    <Route exact path="/person/:id" component={ PersonPage } />
                    <Route exact path="/person"  component={ MainPage } />
                    <Route exact path="/">
                        <Redirect to="/person" />
                    </Route>
                </ErrorBoundary>
            </Switch>
        );
    }
}

export default App;