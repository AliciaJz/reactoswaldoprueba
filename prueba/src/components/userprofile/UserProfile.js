import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    console.log(this.props);
    let { match } = this.props;
    return (
      <div>
        Zila
        {match.path == "/profile" ? (
          <div>Este es mi perfil</div>
        ) : (
          <div>Este es el prefil del usuario {match.params.id}</div>
        )}
      </div>
    );
  }
}

export default UserProfile;
