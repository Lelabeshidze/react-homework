import React, { Component } from "react";


export default class SecondClass extends Component {
	constructor() {
		super();
		this.state = { users: [] };
	}

	addUser = () => {
		const nameArray = ["Toma", "Lika", "Gio", "Tamo", "Sandra", "Lily", "Noa"];
		const newUser = nameArray[Math.floor(Math.random() * nameArray.length)];
		this.setState({ users: [...this.state.users, newUser] });
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
