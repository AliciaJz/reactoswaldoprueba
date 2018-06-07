import React, { Component } from "react";
import { SectionOne } from "./SectionOne";
import { UserCard } from "./UserCard";

class HomePage extends Component {
  state = {
    boolean: false,
    users: [
      {
        name: "Deb",
        edad: 15
      },
      {
        name: "Yaya",
        edad: 29
      },
      {
        name: "Diego",
        edad: 30
      }
    ],
    user: {
      name: "Aliz",
      edad: 33
    }
  };

  render() {
    const { user, users } = this.state;
    return (
      <div>
        Go Go
        <SectionOne {...user} />
        <div>
          mis amigos:
          {users.map((u, key) => <UserCard {...u} key={key} />)}
        </div>
      </div>
    );
  }
}

export default HomePage;
