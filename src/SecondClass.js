import React, { Component } from "react";

export default class SecondClass extends Component {
	constructor() {
		super();
		this.state = { users: [] };
	}

	addUser = () => {
		const nameArray = ["Nia", "Lika", "Gio", "Tamo", "Sandra", "Lily", "Noa"];
		const newUser = nameArray[Math.floor(Math.random() * nameArray.length)];
		const age = Math.floor(Math.random() * 41) + 10;
		const d = new Date();
		let ms = d.valueOf();
		this.setState({
			users: [...this.state.users, newUser, age, ms],
		});
		console.log(this.state.users);
	};
	deleteUser = () => {};
	updateUser = () => {};
	render() {
		return (
			<div>
				<button onClick={this.addUser}>Add User</button>
			</div>
		);
	}
}
