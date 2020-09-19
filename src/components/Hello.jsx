import React, { Component } from "react";
import Projectspic from "../assets/Projects";
import Wave1 from "../assets/Wave1";
import ProjectsStillpic from "../assets/ProjectsStill";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
}

componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
}

updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
}

  render() {

var pic;
if(this.state.width>770){
  pic=<Projectspic/>
}
else{
  pic=<ProjectsStillpic/>
}

    return (
      <div>
        <div className="wave_1">
          <Wave1 />
        </div>
        <div className="wave_1">
          <Wave1 />
        </div>
        <div className="wave_1">
          <Wave1 />
        </div>
        <div className="oneBox violet">

          {pic}

          <div className="textBox">
            <h1> Hello </h1>
            <p style={{ textAlign: "center" }}>
              {" "}
              My name is Madzia. If you are here I hope you would like to know
              me better. Let me shortly tell you my story. I live in Poland,
              near the beautiful Cracow city. I'm a programmer and an
              illustrator with love to coffee and chocolate.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Hello;
