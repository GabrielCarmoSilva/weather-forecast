import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Form from './pages/Form';
import Forecast from './pages/Forecast';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Form} />
                <Route path="/forecast" component={Forecast} />
            </Switch>
        </BrowserRouter>
    )
}