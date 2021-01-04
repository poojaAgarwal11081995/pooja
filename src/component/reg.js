/** @format */

import React from "react";
import { Redirect } from "react-router-dom";
import { Helper, ApiURL } from "../action";
class Register extends React.Component {
	constructor() {
		super();
		this.state = {
			userName: "",
			Email: "",
			Password: "",
			contact: "",
			city: "",
		};
		this.UserName = this.UserName.bind(this);
		this.isEmailOnchange = this.isEmailOnchange.bind(this);
		this.isPasswordOnchange = this.isPasswordOnchange.bind(this);
		this.isContactOnchange = this.isContactOnchange.bind(this);
		this.isCityOnchange = this.isCityOnchange.bind(this);
		this.isSubmit = this.isSubmit.bind(this);
	}
	UserName(event) {
		var nam = Helper.is_name_validation(event.target.value);
		if (nam) {
			this.setState({
				userName: event.target.value,
			});
		}
	}
	isEmailOnchange(event) {
		this.setState({
			Email: event.target.value,
		});
	}
	isPasswordOnchange(event) {
		var p = Helper.is_password_validation(event.target.value);
		if (p) {
			this.setState({
				password: event.target.value,
			});
		}
	}
	isCityOnchange(event) {
		this.setState({
			city: event.target.value,
		});
	}
	isContactOnchange(event) {
		this.setState({
			contact: event.target.value,
		});
	}
	isSubmit(event) {
		event.preventDefault();
		fetch(URL, {
			method: "POST",
			headers: {
				"Contact-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				userName: this.state.userName,
				Email: this.state.Email,
				Password: this.state.Password,
				city: this.state.city,
				contact: this.state.contact,
			}),
		})
			.then((response) => {
				return response.json();
			})
			.then((respData) => {
				if (respData.status === "Success" && respData.status === 200) {
					localStorage.setItem(respData);
				} else {
					alert("sorry");
				}
			})
			.catch((err) => {
				alert("h");
			});
	}
	render() {
		return (
			<form onSubmit={this.isSubmit}>
				username
				<input
					value={this.userName}
					onChange={this.UserName}
					autoComplete="off"
					type="text"
				/>
				email
				<input
					value={this.Email}
					onChange={this.isEmailOnchange}
					autoComplete="off"
					type="email"
				/>
				password
				<input
					value={this.Password}
					onChange={this.isPasswordOnchange}
					autoComplete="off"
					type="password"
				/>
				contact
				<input
					value={this.contact}
					onChange={this.isContactOnchange}
					autoComplete="off"
					type="text"
				/>
				city
				<input
					value={this.city}
					onChange={this.isCityOnchange}
					autoComplete="off"
					type="text"
				/>
				<button type="submit">Submit</button>
			</form>
		);
	}
}
export default Register;
