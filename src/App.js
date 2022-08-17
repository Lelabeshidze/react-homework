import React, { Component, useEffect } from "react";
import SecondClass from "./SecondClass";
import FirstTask from "./FirstTask";
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
		this.state = { showUsersList: true };
	}

	changeOnClick = () => {
		this.setState({ showUsersList: !this.state.showUsersList });
	};

	render() {
		return (
			<div>
				<button onClick={this.changeOnClick}>Show list</button>
				{this.state.showUsersList ? (
					<FirstTask/> 
				) : (
					(document.title = "Unmounting")
				)}
				<SecondClass />
			</div>
		);
	}
}
