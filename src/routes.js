import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Login from '../pages/login';
import Home from "./pages/Home";
import Program from "./pages/Program";

const Routes = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/0-programa' component={Program} />
			</Switch>
		</BrowserRouter>
	)
};

export default Routes;