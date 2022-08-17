import React, { Component } from 'react'
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

export default class FirstTask extends Component {
    constructor() {
		super();
		this.state = { users: []};
	}
	componentDidMount() {
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


  render() {
    const { users} = this.state;
    console.log(this.state.users);
    document.title = `${this.state.users.length}`
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
            <button  onClick={this.onClickHandler}>Delete User</button>
        </div>
    );
}
}
