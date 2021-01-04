/** @format */
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Login from "./login";
import Register from "./reg";
import Dashboard from "./Dashboard";
function Dashroute() {
	return (
		<div>
			<div>
				<ul>
					<li>
						<Link to="/"> Login</Link>
					</li>
					<li>
						<Link to="/register">Sign Up</Link>
					</li>
				</ul>
			</div>
			<Switch>
				<Route
					path="/register"
					exact
					component={(props) => <Register {...props} />}
				/>
				<Route exact path="/" component={(props) => <Login {...props} />} />
				<Route
					exact
					path="/dashboard"
					component={(props) => <Dashboard {...props} />}
				/>
			</Switch>
		</div>
	);
}

export default Dashroute;
