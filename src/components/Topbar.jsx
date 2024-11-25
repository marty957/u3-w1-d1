import { Component } from "react";

class TopBar extends Component {
  render() {
    return (
      <div className="topBar">
        <div className="home">
          <img src="https://i.pinimg.com/originals/a9/cf/57/a9cf57c9d3b20111b26e02ad818785bd.jpg" alt="gamelogo" width={40} />
          <p>Home</p>
          <p>About Us</p>
        </div>
        <div className="account">
          <p>Info</p>
          <p>Account</p>
        </div>
      </div>
    );
  }
}

export default TopBar;
