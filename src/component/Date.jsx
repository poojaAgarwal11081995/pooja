/** @format */

import React from "react";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
	KeyboardTimePicker,
} from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
function DatePicker(props) {
	{
		console.log("props", props);
	}
	const { value, disabled, handleDateChange, label, required } = props;

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justify="space-around">
				<KeyboardDatePicker
					required={required}
					disabled={disabled}
					disableToolbar
					format="MM/dd/yyyy"
					margin="normal"
					id="date-picker-inline"
					label={label}
					value={value}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						"aria-label": "change date",
					}}
				/>
			</Grid>
			{/* <KeyboardTimePicker /> */}
		</MuiPickersUtilsProvider>
	);
}

export default DatePicker;
