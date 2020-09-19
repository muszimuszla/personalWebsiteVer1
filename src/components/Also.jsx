import React, { Component } from "react";
import Alsopic from "../assets/Also";
import AlsoStillpic from "../assets/AlsoStill";
import Wave3 from "../assets/Wave3";

class Also extends Component {
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
  pic=<Alsopic/>
}
else{
  pic=<AlsoStillpic/>
}
    return (
      <div>
        <div className="wave_3">
          <Wave3 />
        </div>
        <div className="wave_3">
          <Wave3 />
        </div>{" "}
        <div className="wave_3">
          <Wave3 />
        </div>
        <div className="oneBox">
              {pic}
          <div className="textBox">
            <h1> About me </h1>
            <p>
              {" "}
              I'm a positive, creative person always wanting to broaden my
              knowledge. I'm willing to participate in challenging projects and
              learn new things every day. Always have tons of ideas with hope
              that someday I'll be able to fulfill them all. Above that I also
              like to spend my free time just relaxing and drawing while
              watching good animated movies.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Also;
