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
    newUser: {}
  };

  render() {
    let { users } = this.state;
    return (
      <div>
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
