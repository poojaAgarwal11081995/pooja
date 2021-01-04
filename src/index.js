/** @format */

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Dashroute from "./component/routes";
import { BrowserRouter } from "react-router-dom";
const Apiget = () => {
	const [data, setData] = useState([]);
	const [id, setId] = useState();
	useEffect(() => {
		// var postId = postId;
		const BASEURL = "https://jsonplaceholder.typicode.com/comments";
		const URL = BASEURL + "?" + "postId" + "=" + id;
		fetch(URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((response) => {
				setData(response);
			})

			.catch((err) => {
				console.log(err);
			});
	}, [id]);
	return (
		<div>
			<input
				type="text"
				value={id}
				onChange={(e) => {
					setId(e.target.value);
				}}
			/>

			<table id="customers">
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Email</th>
					<th>Body</th>
				</tr>

				{data.map((item) => {
					return (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.name}</td>
							<td>{item.email}</td>
							<td>{item.body}</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
};
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
			{/* <Dashroute /> */}
			{/* <Apiget /> */}
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
