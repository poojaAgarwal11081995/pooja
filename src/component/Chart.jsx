/** @format */

import React from "react";
import "./Chart.css";
import DatePicker from "./Date";

import { ReactChartJs } from "@cubetiq/react-chart-js";
function Chart(props) {
	const [datas, setData] = React.useState([]);
	const [month, setmonth] = React.useState([
		"january",
		"febuary",
		"march",
		"april",
		"may",
		"june",
		"july",
		"august",
		"septembr",
		"october",
		"november",
		"december",
	]);
	const [startDate, setStartDate] = React.useState(null);
	const [endDate, setEndDate] = React.useState(null);
	React.useEffect(() => {}, []);
	return (
		<>
			{/* <DatePicker
				required
				disabled={false}
				value={startDate}
				handleDateChange={(date) => setStartDate(date)}
				label="Start Date"
			/>
			<DatePicker
				required
				disabled={false}
				value={endDate}
				handleDateChange={(date) => setEndDate(date)}
				label="End Date"
			/>
			<button
				onClick={() => {
					setStartDate(null);
					setEndDate(null);
				}}>
				Refresh
			</button> */}

			<div className="header">
				<ReactChartJs
					chartConfig={{
						type: "line",
						options: {
							responsive: true,
							title: {
								display: true,
								text: "Monthly Income ",
							},
							tooltips: {
								mode: "index",
								intersect: false,
							},
							hover: {
								mode: "nearest",
								intersect: true,
							},
						},
						data: {
							datasets: [
								datas.map((data) => {
									return {
										label: "full-time",
										data: [10, 15, 45],
										fill: false,
										borderColor: "#ff6384",
									};
								}),
								{
									label: "part-time",
									data: [10, 15, 45, 30, 25, 70],
									fill: false,
									borderColor: "#ff6384",
								},
								{
									label: "full-time",
									data: [5, 0, 50, 10, 15, 45],
									fill: false,
									borderColor: "blue",
								},
							],
							labels: month.map((mon) => {
								return mon;
							}),
						},
					}}
				/>
			</div>
		</>
	);
}

export default Chart;
