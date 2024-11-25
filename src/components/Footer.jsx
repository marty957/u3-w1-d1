import React from "react";

class Footer extends React.Component {
  render() {
    console.log(this);
    return (
      <div style={this.props.footerstyle}>
        <h6>{this.props.company}</h6>
        <p>{this.props.address}</p>
      </div>
    );
  }
}

export default Footer;
