import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import NewSearch from './containers/NewSearch';
import Case from './containers/Case';
import Report from './containers/Report';

export default (
	<Switch>
		<Route exact path="/" component={Dashboard} />
		<Route path="/new" component={NewSearch} />
		<Route path="/case/:id" component={Case} />
		<Route path="/report" component={Report} />
	</Switch>
);
