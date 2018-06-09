import React, { Component } from "react";

class UsersList extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Deb",
        hobby: "Star Wars"
      },
      {
        id: 2,
        name: "Gabo",
        hobby: "Dragon Ball"
      },
      {
        id: 3,
        name: "Aliz",
        hobby: "Buffy the Vampire Slayer"
      }
    ],
    newUser: {
      name: "",
      hobby: ""
    }
  };

  save = e => {
    e.preventDefault();
    let { users, newUser } = this.state;
    users.push(newUser);
    this.setState({ users, newUser: {} });
  };

  handleText = e => {
    let { newUser } = this.state;
    let field = e.target.name;
    newUser[field] = e.target.value;
    this.setState({ newUser });
    console.log(newUser);
  };

  render() {
    let { users, newUser } = this.state;
    return (
      <div>
        <div>
          <form action="" onSubmit={this.save}>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={this.handleText}
            />
            <input
              type="text"
              name="hobby"
              placeholder="hobby"
              onChange={this.handleText}
            />
            <button type="submit">Save</button>
          </form>
        </div>
        {users.map((u, key) => (
          <div key={key}>
            {u.name} likes {u.hobby}
          </div>
        ))}
      </div>
    );
  }
}

export default UsersList;
