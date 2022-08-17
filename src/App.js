import React, { Component, useEffect } from "react";
import SecondClass from "./SecondClass";
const generateUsers = () => {
	return [
		{
			name: "Lela",
			age: 23,
			id: 1,
		},
		{
			name: "Nino",
			age: 20,
			id: 2,
		},
		{
			name: "Nika",
			age: 43,
			id: 3,
		},
		{
			name: "Sandro",
			age: 33,
			id: 4,
		},
		{
			name: "Elene",
			age: 25,
			id: 5,
		},
		{
			name: "Salome",
			age: 28,
			id: 6,
		},
		{
			name: "Beka",
			age: 29,
			id: 7,
		},
		{
			name: "Gio",
			age: 17,
			id: 8,
		},
		{
			name: "Teo",
			age: 26,
			id: 9,
		},
		{
			name: "Saba",
			age: 24,
			id: 10,
		},
	];
};

export default class App extends Component {
	constructor() {
		super();
		this.state = { users: [], showUsersList: true };
	}
	componentDidMount() {
		this.setState({ showUsersList: true });
		const data = generateUsers();
		this.setState({ users: data });
	}
	onClickHandler = () => {
		this.setState((prevState) => {
			const ind = Math.floor(Math.random() * prevState.users.length);
			const newArray = prevState.users.filter((user, index) => index !== ind);
			return { users: newArray };
		});
	};
	changeOnClick = () => {
		this.setState({ showUsersList: !this.state.showUsersList });
	};
	componentDidUpdate() {
		if (this.state.users.length > 0) {
			document.title = `${this.state.users.length}`;
		} else {
			document.title = "Unmounting";
		}
	}


	render() {
		const { users, showUsersList } = this.state;
		console.log(this.state.users);
		return (
			<div>
				{users.map((user) => {
					const { name, age, id } = user;
					return (
						<div key={id}>
							{name}
							{age}
						</div>
					);
				})}
				<button onClick={this.onClickHandler}>Delete User</button>
				<button onClick={this.changeOnClick}>Show list</button>
				<SecondClass/>
			</div>
		);
	}
}
