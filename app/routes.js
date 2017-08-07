import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import About from './components/About';

export default (
	<Switch>
		<Route exact path="/" component={Dashboard} />
		<Route path="/new" component={About} />
	</Switch>
);
