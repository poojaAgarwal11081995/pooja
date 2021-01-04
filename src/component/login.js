/** @format */

import React, { Component } from "react";
import { Helper, ApiURL } from "../action";
export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	handleChange = (event) => {
		const { name } = event.target;
		this.setState({
			[name]: event.target.value,
		});
	};

	handleSubmit = async (event) => {
		if (this.state.password !== this.state.confirmPassword) {
			alert("password does not match");
		} else {
			var data = {
				email: this.state.email,
				password: this.state.password,
				confirmPassword: this.state.confirmPassword,
			};
			console.log(data);
			event.preventDefault();
			var path = ApiURL.adminpath;
			let res = await Helper.send_request("POST", path, data);
			if (res) {
				document.cookie("token", JSON.stringify(res.data.auth.authtoken), {
					path: "/",
				});
			} else {
				console.log("hello");
			}
		}
	};
	render() {
		const { email, password, confirmPassword } = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
					/>
					<input
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
					/>
					<input
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.handleChange}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}
