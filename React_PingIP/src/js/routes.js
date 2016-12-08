import React from 'react';
import { Route, IndexRoute, Redirect, IndexRedirect } from 'react-router';

import App from './components/App';
import NotFoundView from './views/NotFoundView';
import PingComponent from './containers/PingContainer';
import { BASE_PATH } from './constants/pingActionTypes';


export default (
	<Route path={BASE_PATH === ''? BASE_PATH + '/':BASE_PATH} component={App}>
		<IndexRedirect to="ping" />
		<Route path="ping" component={PingComponent} />
		<Route path="404" component={NotFoundView} />
		<Redirect from="*" to="404" />
	</Route>
);