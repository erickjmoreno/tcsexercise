import React from "react";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Exercise from "./components/Exercise";
import "./index.css";

function App() {
	return (
		<div style={{ fontFamily: "Verdana, Arial, sans-serif" }}>
			<Header />
			<Switch>
				<Route exact path="/">
					<WelcomePage />
				</Route>
				<Route path="/exercise">
					<Exercise />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
