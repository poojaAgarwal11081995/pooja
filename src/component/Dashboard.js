/** @format */

import React, { useState, useEffect } from "react";
const URL = "http://139.162.29.56:3060/api/v1/listReviewRatingForRestro";
function Dashboard() {
	const [data, setData] = useState([]);
	const [offset, setOffset] = useState();
	// const [search, setSearch] = useState("Emart");
	useEffect(() => {
		fetch(URL, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: {
				offset: 35,
			},
		})
			.then((resdata) => console.log(resdata))
			.catch((err) => {
				console.log(err);
			});
	});
	return (
		<div>
			{data.map((item) => {
				return <p>{item.data.limit}</p>;
			})}
		</div>
	);
}

export default Dashboard;
