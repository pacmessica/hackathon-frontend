import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import NewSearch from './containers/NewSearch';

export default (
	<Switch>
		<Route exact path="/" component={Dashboard} />
		<Route path="/new" component={NewSearch} />
	</Switch>
);
