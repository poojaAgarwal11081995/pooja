/** @format */

import { da } from "date-fns/locale";
import React from "react";
import FlatList from "flatlist-react";

function Activity() {
	const [value, setValue] = React.useState("");
	const [data, setData] = React.useState([
		{
			image: "",
			status: "Ongoing",
			startDate: "11 Novenber",
			endDate: "30 November",
			target: "100 km",
			participoint: "26532",
		},
	]);
	const people = [
		{ firstName: "Elson", lastName: "Correia", info: { age: 24 } },
		{ firstName: "John", lastName: "Doe", info: { age: 18 } },
		{ firstName: "Jane", lastName: "Doe", info: { age: 34 } },
		{ firstName: "Maria", lastName: "Carvalho", info: { age: 22 } },
		{ firstName: "Kelly", lastName: "Correia", info: { age: 23 } },
		{ firstName: "Don", lastName: "Quichote", info: { age: 39 } },
		{ firstName: "Marcus", lastName: "Correia", info: { age: 0 } },
		{ firstName: "Bruno", lastName: "Gonzales", info: { age: 25 } },
		{ firstName: "Alonzo", lastName: "Correia", info: { age: 44 } },
	];
	const renderPerson = (person, idx) => {
		return (
			<li key={idx}>
				<b>
					{person.firstName} {person.lastName}
				</b>{" "}
				(<span>{person.info.age}</span>)
			</li>
		);
	};
	return (
		<div>
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>

			<ul>
				<FlatList
					list={people}
					renderItem={renderPerson}
					renderWhenEmpty={() => <div>List is empty!</div>}
					sortBy={["firstName", { key: "lastName", descending: true }]}
					groupBy={(person) => (person.info.age > 18 ? "Over 18" : "Under 18")}
					searchBy="firstName"
					searchTerm={value}
				/>
			</ul>

			<div className="container">
				<div className="row">
					{data.map((item) => {
						return (
							<div className="col-4">
								<ul style={{ listStyleType: "none" }}>
									<li>{item.image}</li>
									<li>{item.status}</li>
									<li>{item.startDate}</li>
									<li>{item.endDate}</li>
									<li>{item.target}</li>
									<li>{item.participoint}</li>
								</ul>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Activity;
