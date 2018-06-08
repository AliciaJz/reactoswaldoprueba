import React, { Component } from "react";

class UsersList extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Deb",
        hobbie: "Star Wars"
      },
      {
        id: 2,
        name: "Gabo",
        hobbie: "Dragon Ball"
      },
      {
        id: 3,
        name: "Aliz",
        hobbie: "Buffy the Vampire Slayer"
      }
    ],
    newUser: {
      name: "",
      hobbie: ""
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
              name="hobbie"
              placeholder="hobbie"
              onChange={this.handleText}
            />
            <button type="submit">Save</button>
          </form>
        </div>
        {users.map((u, key) => (
          <div key={key}>
            {u.name} likes {u.hobbie}
          </div>
        ))}
      </div>
    );
  }
}

export default UsersList;
