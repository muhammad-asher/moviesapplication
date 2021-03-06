import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<ToastContainer />

				<NavBar />
				<main className="container">
					<Switch>
						<Route path="/register" component={RegisterForm} />
						<Route path="/login" component={LoginForm} />

						<Route path="/movies/:id" component={MovieForm} />
						<Route path="/customers" Component={Customers}>
							<Customers></Customers>
						</Route>
						<Route path="/movies" Component={Movies}>
							<Movies></Movies>
						</Route>

						<Route path="/rentals" Component={Rentals}>
							<Rentals></Rentals>
						</Route>
						<Route path="/not-found" Component={NotFound}>
							<NotFound></NotFound>
						</Route>
						<Redirect from="/" exact to="/movies" />
						<Redirect to="/not-found" />
					</Switch>
				</main>
			</React.Fragment>
		);
	}
}
export default App;
