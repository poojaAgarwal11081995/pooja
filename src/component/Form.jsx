/** @format */

import React from "react";
import { Helper } from "../action";
import { useForm } from "react-hook-form";
function Form() {
	const { handleSubmit, errors, register, watch, reset } = useForm();
	const [element] = React.useState({
		first_name: "FirstName : ",
		last_name: "LastName :",
		email: "Email : ",
		phone: "Mobile Number: ",
		password: "Password : ",
		confirm_Password: "Confirm Password : ",
	});
	const onSubmit = (data, e) => {
		e.target.reset();
		let err = document.getElementById("span");
		if (data.password === data.confirm_password) {
			err.innerHTML = "";
		} else if (data.password !== data.confirm_password) {
			err.innerHTML = "password and confirm password must be same";
		}
		var res = Helper.api_request("POST", "./signup", data);
		if (res) {
			if (res.status == 200) {
				return res;
			} else {
				console.log("err");
			}
		} else {
			console.log("err");
		}
		alert(JSON.stringify(data));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label>{element.first_name}</label>
				<input
					name="firstname"
					ref={register({
						required: true,
						pattern: /^[a-zA-Z ]{2,30}$/,
						maxLength: 20,
					})}
				/>

				{errors.firstname && errors.firstname.type === "required" && (
					<span>firstname is required</span>
				)}
				{errors.firstname && errors.firstname.type === "pattern" && (
					<span>enter must be alphabet</span>
				)}
			</div>
			<div>
				<label>{element.last_name}</label>
				<input
					name="lastname"
					ref={register({
						required: true,
						pattern: /^[a-zA-Z ]{2,30}$/,
						maxLength: 20,
					})}
				/>
				{errors.lastname && errors.lastname.type === "required" && (
					<span>lastname is required</span>
				)}
				{errors.lastname && errors.lastname.type === "pattern" && (
					<span>enter must be alphabet</span>
				)}
			</div>
			<div>
				<label>{element.email}</label>
				<input
					name="email"
					ref={register({
						required: true,
						pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
						maxLength: 20,
					})}
				/>
				<span>{errors.email && "email is required"}</span>
			</div>
			<div>
				<label>{element.phone}</label>
				<input
					name="number"
					type="text"
					ref={register({
						required: true,
						pattern: /^[7-9][0-9]{9}$/,
						maxLength: 20,
					})}
				/>
				<span>{errors.number && "mobile number enter must be correct"}</span>
			</div>
			<div>
				<label>{element.password}</label>
				<input
					name="password"
					// type="password"
					ref={register({
						required: true,
						pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
					})}
				/>

				{errors.password && errors.password.type === "required" && (
					<span>password is required</span>
				)}
				{errors.password && errors.password.type === "pattern" && (
					<span>
						password must be eight characters including one uppercase letter,
						one special character and alphanumeric characters
					</span>
				)}
			</div>
			<div>
				<label>{element.confirm_Password}</label>
				<input
					name="confirm_password"
					// type="password"
					ref={register({
						required: true,
						pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
					})}
				/>

				{errors.confirm_password &&
					errors.confirm_password.type === "required" && (
						<span>confirm_password is required</span>
					)}
				{errors.confirm_password &&
					errors.confirm_password.type === "pattern" && (
						<span>
							password must be eight characters including one uppercase letter,
							one special character and alphanumeric characters
						</span>
					)}
			</div>
			<div>
				<select name="gender" ref={register}>
					<option value="female">option</option>
					<option value="female">female</option>
					<option value="male">male</option>
					<option value="other">other</option>
				</select>
			</div>

			<span id="span"></span>

			<input type="submit" />
		</form>
	);
}

export default Form;
