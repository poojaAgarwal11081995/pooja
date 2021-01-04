/** @format */

const Helper = {
	get_cookie: (cname) => {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(";");
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == " ") {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	},
	api_request: async (method, path, formData = undefined) => {
		var URL = path;
		var response = fetch(URL, {
			method: method,
			headers: {
				"Content-type": "application/jason",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => {
				return response.json();
			})
			.then((responseData) => {
				alert(responseData);
			})
			.catch((err) => {
				console.log("responseData", err);
			});

		return response;
	},
	send_request: async (method, path, formData = undefined, roll = 1) => {
		console.log("formData", formData, method, path);
		var authtoken = Helper.get_cookie("token");
		var headers = {
			"Content-Type": "application/json",
		};
		if (authtoken) {
			headers.authtoken = eval(authtoken);
		}
		if (roll == 1) {
			var URL = "" + path;
		} else {
			var URL = "" + path;
		}
		return fetch(URL, {
			method: method,
			headers: headers,
			body: JSON.stringify(formData),
		})
			.then((response) => {
				return response.json();
			})
			.then((responseData) => {
				return responseData;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	is_name_validation: (x) => {
		let name = x;
		if (name !== "" && name !== undefined) {
			let regex = "[a-zA-Z]+\\.?";
			let result = name.match(regex);
			if (result) {
				return true;
			} else {
				return false;
			}
		}
	},
	is_number_validation: (num) => {
		let number = num;
		if (number != "" && number != undefined) {
			let num_regex = /^[7-9][0-9]{9}$/;
			if (num_regex.test(number)) {
				alert(`Your mobile number : ${number} is Valid`);
				return true;
			} else {
				alert("you have enter invalid mobile number");
				return false;
			}
		}
	},
	is_password_validation: (password) => {
		let pass = password;
		if (pass != "" && pass != undefined) {
			if (pass.length == 9) {
				console.log(pass.length);
				let passReg = new RegExp(
					"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^ws]).{8,}$",
				);
				var i = passReg.test(pass);
				console.log(i);
				if (i) {
					return true;
				} else {
					alert(
						"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
					);
					return false;
				}
			}
		}
	},
};

export default Helper;
