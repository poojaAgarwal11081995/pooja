/** @format */

// /** @format */
// import React, { useState, useEffect } from "react";
// import "./App.css";
// import BootstrapTable from "react-bootstrap-table-next";
// import filterFactory, {
// 	selectFilter,
// 	textFilter,
// } from "react-bootstrap-table2-filter";
// import paginationFactory from "react-bootstrap-table2-paginator";
// import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
// import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";

// function App() {
// 	const [data, setData] = useState([]);
// 	const [id, setId] = useState();
// 	const selectOptions = {
// 		0: "suger",
// 		1: "salt",
// 	};
// 	const Column = [
// 		{
// 			dataField: "id",
// 			text: "ID",
// 			filter: textFilter(),
// 		},
// 		{
// 			dataField: "title",

// 			text: "Title",
// 			filter: textFilter({
// 				defaultValue: "",
// 				caseSensitive: true,
// 			}),
// 		},
// 		{
// 			dataField: "body",
// 			text: "Data",
// 			// formatter: (cell) => selectOptions[cell],
// 			filter: selectFilter({
// 				options: selectOptions,
// 			}),
// 		},
// 	];
// 	useEffect(() => {
// 		getList();
// 	});
// 	const getList = async () => {
// 		return await fetch(`https://jsonplaceholder.typicode.com/comments`, {
// 			method: "GET",
// 			headers: {
// 				"Content-type": "application.json",
// 			},
// 		})
// 			.then((response) => {
// 				return response.json();
// 			})
// 			.then((jsonData) => {
// 				setData(jsonData);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	};
// 	const options = {
// 		sizePerPageList: [
// 			{
// 				text: "5",
// 				value: 5,
// 			},
// 			{
// 				text: "10",
// 				value: 10,
// 			},
// 			{
// 				text: "All",
// 				value: data.length,
// 			},
// 		],
// 	};
// 	return (
// 		<>
// 			<input
// 				type="text"
// 				value={id}
// 				onChange={(e) => {
// 					setId(e.target.value);
// 				}}
// 			/>
// 			<BootstrapTable
// 				keyField="id"
// 				columns={Column}
// 				data={data}
// 				filter={filterFactory()}
// 				pagination={paginationFactory(options)}
// 			/>
// 		</>
// 	);
// }

// export default App;
// import React, { useState, useEffect } from "react";

// function App() {
// 	const [data, setData] = useState([
// 		{ name: "Mark Teer Stegen" },
// 		{ name: "Nelson Semedo" },
// 		{ name: "Gerrard Pique" },
// 		{ name: "Ivan Rakitic" },
// 		{ name: "Sergio Busquets" },
// 		{ name: "Denis Suarez" },
// 		{ name: "Coutinho" },
// 		{ name: "Luis Suarez" },
// 		{ name: "Lionel Messi" },
// 		{ name: "Dembele" },
// 		{ name: "Malcom" },
// 	]);
// 	const [name, setname] = useState("");
// 	const getName = () => {
// 		return data
// 			.filter((player) => player.name.includes(name))
// 			.map((searchedPlayers) => {
// 				return (
// 					<tr key={searchedPlayers.name}>
// 						<td>{searchedPlayers.name}</td>
// 					</tr>
// 				);
// 			});
// 	};

// 	return (
// 		<div>
// 			<input
// 				type="text"
// 				value={name}
// 				onChange={(e) => {
// 					setname(e.target.value);
// 				}}
// 			/>
// 			<table>
// 				<tbody>{getName()}</tbody>
// 			</table>
// 		</div>
// 	);
// }

// export default App;
// import React from "react";
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// function App() {
// 	const [loader, setLoader] = React.useState(false);
// 	const [data, setData] = React.useState([]);
// 	const [timer, setTimer] = React.useState(1000);
// 	React.useEffect(() => {
// 		fetch(`https://jsonplaceholder.typicode.com/posts`)
// 			.then((res) => {
// 				return res.json();
// 			})
// 			.then((resResult) => {
// 				setLoader(true);
// 				setTimeout(() => {
// 					setData(resResult);
// 				}, 1300);
// 			})
// 			.catch((err) => {
// 				return err;
// 			});
// 	}, [data]);
// 	return (
// 		<div>
// 			<Loader
// 				type="TailSpin"
// 				color="red"
// 				height={100}
// 				width={70}
// 				style={{
// 					justifyContent: "center",
// 					alignItems: "center",
// 					display: "flex",
// 					marginTop: "20%",
// 				}}
// 				timeout={timer} //3 secs
// 			/>
// 			{data.map((item) => {
// 				return <div>{item.title}</div>;
// 			})}
// 		</div>
// 	);
// }

// export default App;
import React from "react";
import Form from "./component/Form";
import Chart from "./component/Chart";
import Message from "./component/Message";
function App() {
	return (
		<div>
			{/* <Form /> */}

			<Chart />
			{/* <Message /> */}
		</div>
	);
}

export default App;
